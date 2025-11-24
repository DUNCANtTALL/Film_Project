import React, { useState } from 'react';
import { Col, Button, Modal, Form, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';
// Ensure this path correctly points to your file containing AddReview
import { AddReview } from '../services/services'; 

function CardFilm({ movie }) {
  const [showModal, setShowModal] = useState(false);

  // Form State
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  
  // NEW STATE FOR OPTIONAL FIELDS
  const [viewingDate, setViewingDate] = useState("");
  const [viewingLocation, setViewingLocation] = useState("");
  
  // UI State for feedback
  const [submissionStatus, setSubmissionStatus] = useState(null); 
  const [errorMessage, setErrorMessage] = useState("");

  const handleShow = () => {
    // Reset state every time the modal opens
    setReviewerName("");
    setRating(5);
    setComment("");
    setViewingDate(""); // Reset optional fields
    setViewingLocation(""); // Reset optional fields
    setSubmissionStatus(null);
    setErrorMessage("");
    setShowModal(true);
  };
  
  const handleClose = () => setShowModal(false);

  const handleSubmitReview = async (event) => {
    event.preventDefault();
    setSubmissionStatus(null);
    setErrorMessage("");

    // Function to safely set optional fields to null if they are empty strings
    const safeOptional = (value) => (value && value.trim() !== '') ? value.trim() : null;

    // --- PAYLOAD CONSTRUCTION matching Java ReviewPayload ---
    const movieIdentifier = movie.movieId || movie.id;
    
    if (!movieIdentifier) {
        setSubmissionStatus('error');
        setErrorMessage("Movie ID is missing. Cannot submit review.");
        return;
    }

    const reviewPayload = {
        // userId: 1 is set because your Java backend is configured for a single user
        userId: 1, 
        movieId: movieIdentifier, 
        // Java expects 'content', so we map 'comment' state here
        content: comment, 
        rating: parseInt(rating),
        // USE STATE, set to null if empty
        viewingLocation: safeOptional(viewingLocation),
        viewingDate: safeOptional(viewingDate), 
    };

    try {
        await AddReview(movieIdentifier, reviewPayload);
        
        // Handle Success
        setSubmissionStatus('success');
        
        // Clear form fields
        setReviewerName("");
        setRating(5);
        setComment("");
        setViewingDate("");
        setViewingLocation("");

        // Auto-close modal after success message
        setTimeout(() => {
            handleClose();
        }, 1500);

    } catch (error) {
        console.error("Failed to add review", error);
        setSubmissionStatus('error');
        
        const apiError = error.response?.data || error.message;
        
        if (typeof apiError === 'string') {
            setErrorMessage(`Submission failed: ${apiError}`);
        } else {
            setErrorMessage("Connection failed. Check if Java server is running.");
        }
    }
  };

  // Safe navigation path
  const detailPath = `/movie/${encodeURIComponent(movie.movieName)}`;

  return (
    <>
      <Col>
        {/* Poster Link */}
        <Link to={detailPath} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="proj-imgbx">
                <img 
                    src={movie.poster} 
                    alt={movie.movieName} 
                    style={{ width: "100%", borderRadius: "30px", cursor: 'pointer' }} 
                />
                <div className="proj-txtx">
                    <h4>{movie.movieName}</h4>
                    <span><b>Director:</b> {movie.realisateur}</span><br />
                    <span><b>Release:</b> {movie.dateSortie}</span><br />
                    <span><b>Synopsis:</b> {movie.synopsis?.substring(0, 100)}...</span>
                </div>
            </div>
        </Link>
        
        {/* Buttons */}
        <div className="d-flex justify-content-between mt-2">
            <Link to={detailPath} className="w-50 me-2">
                <Button variant="outline-primary" className="w-100">
                    See Details
                </Button>
            </Link>

            <Button variant="info" onClick={handleShow} className="w-50 ms-2">
                Add Review
            </Button>
        </div>
      </Col>

      {/* --- Review Modal --- */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Review: {movie.movieName}</Modal.Title>
        </Modal.Header>
        
        <Form onSubmit={handleSubmitReview}>
          <Modal.Body>
            {/* Feedback Alerts */}
            {submissionStatus === 'success' && (
                <Alert variant="success">Review submitted successfully!</Alert>
            )}
            {submissionStatus === 'error' && (
                <Alert variant="danger">{errorMessage}</Alert>
            )}

            <Form.Group className="mb-3" controlId="formReviewerName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your name (Posted as User 1)" 
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRating">
              <Form.Label>Rating</Form.Label>
              <Form.Select 
                value={rating} 
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="5">★★★★★ (5/5)</option>
                <option value="4">★★★★☆ (4/5)</option>
                <option value="3">★★★☆☆ (3/5)</option>
                <option value="2">★★☆☆☆ (2/5)</option>
                <option value="1">★☆☆☆☆ (1/5)</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formViewingDate">
              <Form.Label>Date Watched (Optional)</Form.Label>
              <Form.Control 
                type="date" 
                value={viewingDate}
                onChange={(e) => setViewingDate(e.target.value)}
              />
              <Form.Text muted>Format: YYYY-MM-DD</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formViewingLocation">
              <Form.Label>Viewing Location (Optional)</Form.Label>
              <Form.Select 
                value={viewingLocation} 
                onChange={(e) => setViewingLocation(e.target.value)}
              >
                <option value="">-- Select Location --</option>
                <option value="cinema">Cinema</option>
                <option value="platform">Streaming Platform (e.g., Netflix)</option>
                <option value="cd_bluray">CD/BluRay</option>
                <option value="other">Other</option>
              </Form.Select>
              <Form.Text muted>
                Must be one of the valid options accepted by the server.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formComment">
              <Form.Label>Review Comment</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Write your thoughts..." 
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required 
              />
            </Form.Group>
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={submissionStatus === 'success'}>
              Submit Review
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CardFilm;