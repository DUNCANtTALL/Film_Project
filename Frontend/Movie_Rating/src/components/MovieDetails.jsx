import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner, Alert, Button } from 'react-bootstrap';
import { ArrowLeft, StarFill } from 'react-bootstrap-icons'; 
// IMPORT THE REVIEW SERVICE FUNCTION
import { GetMovieReviews } from '../services/services'; 

function MovieDetailPage() {
    const { movieNameSlug } = useParams(); 
    const navigate = useNavigate();
    
    // State for Movie Details
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // State for Reviews
    const [reviews, setReviews] = useState([]);
    const [reviewsLoading, setReviewsLoading] = useState(false);
    const [reviewsError, setReviewsError] = useState(null);

    const actualMovieName = decodeURIComponent(movieNameSlug);

    // =========================================================
    // EFFECT 1: FETCH MOVIE DETAILS BY NAME
    // =========================================================
    useEffect(() => {
        setLoading(true);
        setError(null);

        const apiUrl = `http://localhost:8080/backend/api/movies/search?name=${encodeURIComponent(actualMovieName)}`;

        fetch(apiUrl)
            .then(async res => {
                if (!res.ok) {
                    throw new Error(`Server returned status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                if (data) {
                    // Assuming the returned movie object has a 'movieId' or 'id' property
                    setMovie(data); 
                } else {
                    setError(`Movie details for '${actualMovieName}' could not be found.`);
                }
            })
            .catch(err => {
                console.error("Fetch error:", err);
                setError(`API Load Failure: ${err.message}. Please check your Java server console.`);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [actualMovieName]);

    // =========================================================
    // EFFECT 2: FETCH REVIEWS based on Movie ID
    // =========================================================
    useEffect(() => {
        // Only fetch reviews if the movie object is loaded and has a valid ID
        if (movie && (movie.movieId || movie.id)) {
            const movieId = movie.movieId || movie.id;
            setReviewsLoading(true);
            setReviewsError(null);

            // Fetch reviews
            GetMovieReviews(movieId)
                .then(data => {
                    setReviews(data);
                })
                .catch(err => {
                    console.error("Review fetch error:", err);
                    setReviewsError("Failed to load reviews. Backend API error.");
                })
                .finally(() => {
                    setReviewsLoading(false);
                });
        }
    }, [movie]); // Depend on the movie state

    // --- Render Logic (Loading/Error States) ---

    if (loading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-2">Loading details for: {actualMovieName}</p>
            </Container>
        );
    }

    if (error || !movie) {
        return (
            <Container className="py-5">
                <Alert variant="danger">{error || "Movie not found"}</Alert>
                <Button variant="secondary" onClick={() => navigate(-1)} className="mt-3">
                    <ArrowLeft className="me-2" /> Back to List
                </Button>
            </Container>
        );
    }


    // --- Detail Display ---
    return (
        <Container className="py-5">
            <Button variant="secondary" onClick={() => navigate(-1)} className="mb-4">
                <ArrowLeft className="me-2" /> Back to List
            </Button>

            <h1 className="text-primary mb-4">{movie.movieName}</h1>

            <Row>
                <Col md={4} className="mb-4">
                    <Card className="shadow-lg border-0 rounded-3">
                        <Card.Img 
                            variant="top" 
                            src={movie.poster} 
                            alt={`Poster for ${movie.movieName}`} 
                            className="rounded-top-3"
                        />
                    </Card>
                </Col>
                <Col md={8}>
                    <Card className="shadow-lg p-4 rounded-3">
                        <h2 className="text-secondary mb-3">Synopsis</h2>
                        <p className="lead">{movie.synopsis}</p>
                        
                        <hr className="my-4"/>

                        <Row className="g-3">
                            <Col sm={6}><strong>Director:</strong> {movie.realisateur}</Col>
                            <Col sm={6}><strong>Category:</strong> {movie.categoryName}</Col>
                            <Col sm={6}><strong>Release:</strong> {movie.dateSortie}</Col>
                            <Col sm={6}><strong>Production:</strong> {movie.dateRealisation}</Col>
                            <Col xs={12}>
                                <strong>Actors:</strong> <br/>
                                {movie.listeActeurs?.join(", ")}
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            {/* ========================================================= */}
            {/* NEW SECTION: REVIEWS DISPLAY */}
            {/* ========================================================= */}
            <Row className="mt-5">
                <Col xs={12}>
                    <Card className="shadow-lg p-4 rounded-3">
                        <h2 className="text-primary mb-4">User Reviews ({reviews.length})</h2>

                        {reviewsLoading && (
                            <div className="text-center py-3">
                                <Spinner animation="grow" size="sm" /> Fetching reviews...
                            </div>
                        )}

                        {reviewsError && (
                            <Alert variant="danger">{reviewsError}</Alert>
                        )}
                        
                        {!reviewsLoading && !reviewsError && reviews.length === 0 && (
                            <Alert variant="info">No reviews submitted yet. Be the first!</Alert>
                        )}

                        {reviews.map((review, index) => (
                            <div key={index} className="review-item mb-4 pb-3 border-bottom">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">User {review.userId}</h5>
                                    <div className="text-warning">
                                        {/* Display rating with star icons */}
                                        {Array.from({ length: review.rating }, (_, i) => (
                                            <StarFill key={i} className="me-1" />
                                        ))}
                                        ({review.rating}/5)
                                    </div>
                                </div>
                                <p className="mt-2 mb-1">{review.content}</p>
                                <small className="text-muted">
                                    {review.viewingDate && `Watched on: ${review.viewingDate} | `}
                                    {review.viewingLocation && `Location: ${review.viewingLocation}`}
                                </small>
                            </div>
                        ))}
                    </Card>
                </Col>
            </Row>
            {/* ========================================================= */}
        </Container>
    );
}

export default MovieDetailPage;