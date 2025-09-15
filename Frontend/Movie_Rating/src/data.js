const movies = [
  {
    "category": "Action",
    "dateDeRealisation": "2018-01-01",
    "dateDeSortie": "2019-04-26",
    "listeDesActeurs": [
      "Robert Downey Jr.",
      "Chris Evans",
      "Scarlett Johansson"
    ],
    "name": "Avengers: Endgame",
    "realisateur": "Anthony Russo, Joe Russo",
    "synopsis": "The Avengers assemble once more to reverse the damage caused by Thanos and restore balance to the universe."
  },
  {
    "category": "Action",
    "dateDeRealisation": "2015-01-01",
    "dateDeSortie": "2015-05-15",
    "listeDesActeurs": [
      "Tom Hardy",
      "Charlize Theron",
      "Nicholas Hoult"
    ],
    "name": "Mad Max: Fury Road",
    "realisateur": "George Miller",
    "synopsis": "In a post-apocalyptic wasteland, Max teams up with Furiosa to flee a tyrannical warlord."
  },
  {
    "category": "Action",
    "dateDeRealisation": "2014-01-01",
    "dateDeSortie": "2014-10-24",
    "listeDesActeurs": [
      "Keanu Reeves",
      "Michael Nyqvist",
      "Alfie Allen"
    ],
    "name": "John Wick",
    "realisateur": "Chad Stahelski",
    "synopsis": "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car."
  },
  {
    "category": "Action",
    "dateDeRealisation": "2008-01-01",
    "dateDeSortie": "2008-07-18",
    "listeDesActeurs": [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart"
    ],
    "name": "The Dark Knight",
    "realisateur": "Christopher Nolan",
    "synopsis": "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into chaos."
  },
  {
    "category": "Action",
    "dateDeRealisation": "2000-01-01",
    "dateDeSortie": "2000-05-05",
    "listeDesActeurs": [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen"
    ],
    "name": "Gladiator",
    "realisateur": "Ridley Scott",
    "synopsis": "A betrayed Roman general seeks revenge against the corrupt emperor who murdered his family."
  },
  {
    "category": "Amour",
    "dateDeRealisation": "2018-06-01",
    "dateDeSortie": "2018-10-05",
    "listeDesActeurs": [
      "Bradley Cooper",
      "Lady Gaga",
      "Sam Elliott"
    ],
    "name": "A Star is Born",
    "realisateur": "Bradley Cooper",
    "synopsis": "A seasoned musician helps a young singer find fame while struggling with his own personal demons."
  },
  {
    "category": "Amour",
    "dateDeRealisation": "2016-08-01",
    "dateDeSortie": "2016-12-09",
    "listeDesActeurs": [
      "Ryan Gosling",
      "Emma Stone",
      "John Legend"
    ],
    "name": "La La Land",
    "realisateur": "Damien Chazelle",
    "synopsis": "A jazz musician and an aspiring actress pursue their dreams while navigating love in Los Angeles."
  },
  {
    "category": "Amour",
    "dateDeRealisation": "2005-01-01",
    "dateDeSortie": "2005-11-11",
    "listeDesActeurs": [
      "Keira Knightley",
      "Matthew Macfadyen",
      "Brenda Blethyn"
    ],
    "name": "Pride & Prejudice",
    "realisateur": "Joe Wright",
    "synopsis": "Elizabeth Bennet navigates issues of manners, upbringing, and morality in 19th-century England while falling in love with Mr. Darcy."
  },
  {
    "category": "Amour",
    "dateDeRealisation": "2004-06-01",
    "dateDeSortie": "2004-06-25",
    "listeDesActeurs": [
      "Ryan Gosling",
      "Rachel McAdams",
      "James Garner"
    ],
    "name": "The Notebook",
    "realisateur": "Nick Cassavetes",
    "synopsis": "A young couple falls in love in the 1940s but are separated by social differences and family opposition."
  },
  {
    "category": "Amour",
    "dateDeRealisation": "1997-07-01",
    "dateDeSortie": "1997-12-19",
    "listeDesActeurs": [
      "Leonardo DiCaprio",
      "Kate Winslet",
      "Billy Zane"
    ],
    "name": "Titanic",
    "realisateur": "James Cameron",
    "synopsis": "A romance blossoms between a poor artist and a rich woman aboard the ill-fated RMS Titanic."
  },
  {
    "category": "Horror",
    "dateDeRealisation": "2018-01-01",
    "dateDeSortie": "2018-04-06",
    "listeDesActeurs": [
      "Emily Blunt",
      "John Krasinski",
      "Millicent Simmonds"
    ],
    "name": "A Quiet Place",
    "realisateur": "John Krasinski",
    "synopsis": "In a post-apocalyptic world, a family must remain silent to survive creatures that hunt by sound."
  },
  {
    "category": "Horror",
    "dateDeRealisation": "2017-01-01",
    "dateDeSortie": "2017-09-08",
    "listeDesActeurs": [
      "Bill Skarsgård",
      "Jaeden Martell",
      "Finn Wolfhard"
    ],
    "name": "It",
    "realisateur": "Andy Muschietti",
    "synopsis": "A group of children face their fears when a shape-shifting clown terrorizes their town."
  },
  {
    "category": "Horror",
    "dateDeRealisation": "2017-01-01",
    "dateDeSortie": "2017-02-24",
    "listeDesActeurs": [
      "Daniel Kaluuya",
      "Allison Williams",
      "Bradley Whitford"
    ],
    "name": "Get Out",
    "realisateur": "Jordan Peele",
    "synopsis": "A young African-American man visits his white girlfriend's family estate, uncovering disturbing secrets."
  },
  {
    "category": "Horror",
    "dateDeRealisation": "2013-01-01",
    "dateDeSortie": "2013-07-19",
    "listeDesActeurs": [
      "Vera Farmiga",
      "Patrick Wilson",
      "Lili Taylor"
    ],
    "name": "The Conjuring",
    "realisateur": "James Wan",
    "synopsis": "Paranormal investigators help a family terrorized by a dark presence in their farmhouse."
  },
  {
    "category": "Horror",
    "dateDeRealisation": "1980-01-01",
    "dateDeSortie": "1980-05-23",
    "listeDesActeurs": [
      "Jack Nicholson",
      "Shelley Duvall",
      "Danny Lloyd"
    ],
    "name": "The Shining",
    "realisateur": "Stanley Kubrick",
    "synopsis": "A family heads to an isolated hotel where an evil presence influences the father into violence."
  },
  {
    "category": "Humour",
    "dateDeRealisation": "2011-01-01",
    "dateDeSortie": "2011-05-13",
    "listeDesActeurs": [
      "Kristen Wiig",
      "Maya Rudolph",
      "Rose Byrne"
    ],
    "name": "Bridesmaids",
    "realisateur": "Paul Feig",
    "synopsis": "Competition between the maid of honor and a bridesmaid over who is the bride's best friend leads to hilarious disasters."
  },
  {
    "category": "Humour",
    "dateDeRealisation": "2009-05-01",
    "dateDeSortie": "2009-06-05",
    "listeDesActeurs": [
      "Bradley Cooper",
      "Ed Helms",
      "Zach Galifianakis"
    ],
    "name": "The Hangover",
    "realisateur": "Todd Phillips",
    "synopsis": "Three friends wake up after a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing."
  },
  {
    "category": "Humour",
    "dateDeRealisation": "2007-04-01",
    "dateDeSortie": "2007-08-17",
    "listeDesActeurs": [
      "Jonah Hill",
      "Michael Cera",
      "Christopher Mintz-Plasse"
    ],
    "name": "Superbad",
    "realisateur": "Greg Mottola",
    "synopsis": "Two high school friends try to enjoy their remaining time before graduation, facing awkward situations and hilarious misadventures."
  },
  {
    "category": "Humour",
    "dateDeRealisation": "1994-01-01",
    "dateDeSortie": "1994-12-16",
    "listeDesActeurs": [
      "Jim Carrey",
      "Jeff Daniels",
      "Lauren Holly"
    ],
    "name": "Dumb and Dumber",
    "realisateur": "Peter Farrelly, Bobby Farrelly",
    "synopsis": "Two incredibly stupid friends embark on a cross-country road trip to return a briefcase full of money."
  },
  {
    "category": "Humour",
    "dateDeRealisation": "1994-01-01",
    "dateDeSortie": "1994-07-29",
    "listeDesActeurs": [
      "Jim Carrey",
      "Cameron Diaz",
      "Peter Riegert"
    ],
    "name": "The Mask",
    "realisateur": "Chuck Russell",
    "synopsis": "A timid bank clerk transforms into a manic superhero when he discovers a magical mask."
  },
  {
    "category": "Science-Fiction",
    "dateDeRealisation": "2017-01-01",
    "dateDeSortie": "2017-10-06",
    "listeDesActeurs": [
      "Ryan Gosling",
      "Harrison Ford",
      "Ana de Armas"
    ],
    "name": "Blade Runner 2049",
    "realisateur": "Denis Villeneuve",
    "synopsis": "A young blade runner discovers a long-buried secret that could plunge what's left of society into chaos."
  },
  {
    "category": "Science-Fiction",
    "dateDeRealisation": "2014-11-01",
    "dateDeSortie": "2014-11-07",
    "listeDesActeurs": [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain"
    ],
    "name": "Interstellar",
    "realisateur": "Christopher Nolan",
    "synopsis": "A team of explorers travel through a wormhole in space to ensure humanity's survival."
  },
  {
    "category": "Science-Fiction",
    "dateDeRealisation": "2010-06-01",
    "dateDeSortie": "2010-07-16",
    "listeDesActeurs": [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page"
    ],
    "name": "Inception",
    "realisateur": "Christopher Nolan",
    "synopsis": "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a CEO's mind."
  },
  {
    "category": "Science-Fiction",
    "dateDeRealisation": "2009-12-01",
    "dateDeSortie": "2009-12-18",
    "listeDesActeurs": [
      "Sam Worthington",
      "Zoe Saldana",
      "Sigourney Weaver"
    ],
    "name": "Avatar",
    "realisateur": "James Cameron",
    "synopsis": "A paraplegic Marine is dispatched to the moon Pandora on a unique mission, becoming torn between following orders and protecting an alien civilization."
  },
  {
    "category": "Science-Fiction",
    "dateDeRealisation": "1999-03-01",
    "dateDeSortie": "1999-03-31",
    "listeDesActeurs": [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss"
    ],
    "name": "The Matrix",
    "realisateur": "Lana Wachowski, Lilly Wachowski",
    "synopsis": "A hacker discovers the nature of reality and his role in the war against its controllers."
  }
]

export default movies;