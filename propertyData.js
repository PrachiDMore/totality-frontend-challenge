const properties = [
  {
    id: "1a2b3c4d5e",
    propertyType: "House",
    propertyName: "Cozy Urban Retreat",
    location: "123 Maple Street, Downtown, San Francisco, CA",
    description: "Experience the charm of urban living in this beautifully furnished 2-bedroom apartment located in the heart of downtown San Francisco. With modern amenities, sleek interiors, and large windows that flood the space with natural light, this apartment is perfect for those who love city life.",
    area: 1200,
    price: 30000,
    bedrooms: 2,
    bathrooms: 1.5,
    amenities: [
      "Fully equipped kitchen",
      "In-unit laundry",
      "High-speed internet",
      "24/7 security",
      "Access to the rooftop garden"
    ],
    nearbyAttractions: "Walking distance to public transportation, popular restaurants, shopping centers, and cultural landmarks.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "2f3g4h5i6j",
    propertyType: "Shop",
    propertyName: "Prime Retail Space",
    location: "456 Elmwood Avenue, Springfield, IL 62704",
    description: "A prime retail space in the bustling downtown area of Springfield. Ideal for small businesses, this shop offers high foot traffic, modern interiors, and a large display window to attract customers.",
    area: 800,
    price: 45000,
    bedrooms: 0,
    bathrooms: 0,
    amenities: [
      "Central air conditioning",
      "Security system",
      "Storage room",
      "High-speed internet"
    ],
    nearbyAttractions: "Located near popular eateries, a shopping mall, and public transportation.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "3k4l5m6n7o",
    propertyType: "Apartment",
    propertyName: "Modern Downtown Condo",
    location: "789 Oak Street, Seattle, WA 98101",
    description: "This sleek and modern 1-bedroom condo is located in the heart of downtown Seattle. Enjoy stunning city views, contemporary finishes, and access to a rooftop terrace.",
    area: 900,
    price: 50000,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
      "Gym",
      "Rooftop terrace",
      "Concierge service",
      "Underground parking"
    ],
    nearbyAttractions: "Close to Pike Place Market, Seattle Art Museum, and the waterfront.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "4p5q6r7s8t",
    propertyType: "Villa",
    propertyName: "Luxury Beachfront Villa",
    location: "123 Ocean Drive, Miami, FL 33139",
    description: "Escape to paradise in this luxurious beachfront villa. Featuring 4 bedrooms, a private pool, and direct beach access, this property is perfect for those seeking the ultimate in relaxation and luxury.",
    area: 3000,
    price: 150000,
    bedrooms: 4,
    bathrooms: 4,
    amenities: [
      "Private pool",
      "Beachfront access",
      "Fully equipped kitchen",
      "Home theater"
    ],
    nearbyAttractions: "Close to luxury shopping, fine dining, and vibrant nightlife.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "5u6v7w8x9y",
    propertyType: "Office",
    propertyName: "Corporate Office Space",
    location: "555 Business Parkway, New York, NY 10001",
    description: "State-of-the-art corporate office space in Midtown Manhattan. Ideal for growing businesses looking to establish their presence in a prime location.",
    area: 5000,
    price: 100000,
    bedrooms: 0,
    bathrooms: 5,
    amenities: [
      "Conference rooms",
      "High-speed internet",
      "24/7 access",
      "On-site parking"
    ],
    nearbyAttractions: "Close to public transportation, restaurants, and financial institutions.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "6z7a8b9c1d",
    propertyType: "House",
    propertyName: "Suburban Family Home",
    location: "789 Pine Lane, Arlington, VA 22207",
    description: "This spacious 4-bedroom family home in Arlington offers a large backyard, modern kitchen, and a quiet neighborhood perfect for raising a family.",
    area: 2500,
    price: 85000,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
      "Garage",
      "Backyard",
      "Fireplace",
      "Hardwood floors"
    ],
    nearbyAttractions: "Nearby schools, parks, and shopping centers.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "7e8f9g1h2i",
    propertyType: "Apartment",
    propertyName: "Stylish Loft",
    location: "234 Cedar Avenue, Austin, TX 78701",
    description: "Experience urban living in this stylish loft in downtown Austin. Features an open floor plan, high ceilings, and modern finishes.",
    area: 1100,
    price: 60000,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
      "Gym",
      "Rooftop deck",
      "Pet-friendly",
      "Secure entry"
    ],
    nearbyAttractions: "Close to music venues, restaurants, and parks.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "8j9k1l2m3n",
    propertyType: "Condo",
    propertyName: "Luxury Penthouse",
    location: "678 Elm Street, Chicago, IL 60611",
    description: "This luxury penthouse in downtown Chicago offers breathtaking city views, modern interiors, and top-of-the-line amenities for the discerning resident.",
    area: 1800,
    price: 120000,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      "Rooftop pool",
      "Gym",
      "Concierge service",
      "Valet parking"
    ],
    nearbyAttractions: "Near the Magnificent Mile, Navy Pier, and cultural institutions.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "9o1p2q3r4s",
    propertyType: "Apartment",
    propertyName: "Urban Oasis",
    location: "123 Main Street, Los Angeles, CA 90012",
    description: "This modern urban oasis in downtown Los Angeles offers stunning city views, an open floor plan, and luxurious amenities.",
    area: 950,
    price: 70000,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
      "Fitness center",
      "Pool",
      "Business center",
      "Secured parking"
    ],
    nearbyAttractions: "Close to shopping, dining, and entertainment in the heart of the city.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "1t2u3v4w5x",
    propertyType: "Cottage",
    propertyName: "Charming Countryside Cottage",
    location: "456 Country Road, Asheville, NC 28803",
    description: "This charming cottage in the Asheville countryside offers peaceful living with modern comforts. Perfect for those seeking a quiet retreat.",
    area: 1300,
    price: 45000,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      "Fireplace",
      "Garden",
      "Patio",
      "Fully equipped kitchen"
    ],
    nearbyAttractions: "Close to hiking trails, local farms, and the Blue Ridge Parkway.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "1aa2bb3cc4",
    propertyType: "Apartment",
    propertyName: "Sunny Side Apartment",
    location: "89 Sunshine Blvd, Miami, FL 33132",
    description: "This 2-bedroom apartment offers a bright and airy space with floor-to-ceiling windows. Located near the beach, it’s perfect for those who love the sun and sea.",
    area: 1100,
    price: 68000,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      "Gym",
      "Swimming pool",
      "Beach access",
      "Secure entry"
    ],
    nearbyAttractions: "Close to beaches, restaurants, and shopping centers.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "2dd3ee4ff5",
    propertyType: "House",
    propertyName: "Countryside Retreat",
    location: "321 Serenity Lane, Nashville, TN 37215",
    description: "Escape to this peaceful 3-bedroom house in the Nashville countryside. Surrounded by nature, it’s a perfect retreat from city life.",
    area: 2200,
    price: 90000,
    bedrooms: 3,
    bathrooms: 2.5,
    amenities: [
      "Large backyard",
      "Garage",
      "Fireplace",
      "Modern kitchen"
    ],
    nearbyAttractions: "Near parks, hiking trails, and a charming small town.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "3gg4hh5ii6",
    propertyType: "Condo",
    propertyName: "City View Condo",
    location: "777 High Street, Denver, CO 80202",
    description: "Enjoy breathtaking city views from this 1-bedroom condo in downtown Denver. Features a modern design and luxurious amenities.",
    area: 950,
    price: 65000,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
      "Rooftop terrace",
      "Gym",
      "24/7 security",
      "Underground parking"
    ],
    nearbyAttractions: "Close to shopping, restaurants, and entertainment.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "4jj5kk6ll7",
    propertyType: "Villa",
    propertyName: "Mediterranean Villa",
    location: "456 Coastal Road, Malibu, CA 90265",
    description: "A stunning 5-bedroom Mediterranean-style villa with ocean views, private pool, and luxurious interiors. Perfect for those seeking a lavish lifestyle.",
    area: 3500,
    price: 200000,
    bedrooms: 5,
    bathrooms: 5,
    amenities: [
      "Private pool",
      "Ocean view",
      "Home theater",
      "Gourmet kitchen"
    ],
    nearbyAttractions: "Near the beach, luxury shopping, and fine dining.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "5mm6nn7oo8",
    propertyType: "Office",
    propertyName: "Modern Office Space",
    location: "123 Tech Avenue, Silicon Valley, CA 94043",
    description: "This modern office space is designed for tech startups. Located in the heart of Silicon Valley, it features open-plan layouts, meeting rooms, and a tech-friendly environment.",
    area: 6000,
    price: 120000,
    bedrooms: 0,
    bathrooms: 6,
    amenities: [
      "Conference rooms",
      "High-speed internet",
      "On-site parking",
      "24/7 access"
    ],
    nearbyAttractions: "Close to tech campuses, cafes, and public transportation.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "6pp7qq8rr9",
    propertyType: "House",
    propertyName: "Lakeside Family Home",
    location: "789 Lakeview Road, Orlando, FL 32801",
    description: "A beautiful 4-bedroom family home with a large backyard and a stunning view of the lake. Perfect for families who love outdoor activities.",
    area: 2800,
    price: 95000,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
      "Garage",
      "Backyard",
      "Lake view",
      "Outdoor kitchen"
    ],
    nearbyAttractions: "Near parks, schools, and shopping centers.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "7ss8tt9uu1",
    propertyType: "Apartment",
    propertyName: "Chic City Apartment",
    location: "456 Broadway Avenue, New York, NY 10012",
    description: "This chic 2-bedroom apartment in SoHo offers modern interiors, a spacious layout, and access to luxurious amenities. Perfect for those who enjoy city life.",
    area: 1300,
    price: 75000,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      "Gym",
      "Rooftop terrace",
      "Concierge service",
      "Pet-friendly"
    ],
    nearbyAttractions: "Close to shopping, art galleries, and top restaurants.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "8vv9ww1xx2",
    propertyType: "Shop",
    propertyName: "Boutique Retail Space",
    location: "321 Fashion Street, Los Angeles, CA 90015",
    description: "A trendy retail space in the Fashion District, ideal for boutique shops. High foot traffic and a stylish interior make it perfect for fashion retailers.",
    area: 1200,
    price: 80000,
    bedrooms: 0,
    bathrooms: 0,
    amenities: [
      "Large display windows",
      "Central air conditioning",
      "Storage room",
      "High-speed internet"
    ],
    nearbyAttractions: "Close to fashion showrooms, cafes, and shopping centers.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "9yy1zz2aa3",
    propertyType: "Cottage",
    propertyName: "Secluded Mountain Cottage",
    location: "123 Mountain Trail, Boulder, CO 80302",
    description: "A cozy 2-bedroom cottage nestled in the Boulder mountains. Ideal for nature lovers, this property offers tranquility and beautiful views.",
    area: 1500,
    price: 60000,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      "Fireplace",
      "Deck with mountain views",
      "Modern kitchen",
      "Hot tub"
    ],
    nearbyAttractions: "Near hiking trails, wildlife parks, and scenic overlooks.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  },
  {
    id: "1bb2cc3dd4",
    propertyType: "Condo",
    propertyName: "Skyline Penthouse",
    location: "678 Tower Road, Dallas, TX 75201",
    description: "A luxurious 3-bedroom penthouse with panoramic views of the Dallas skyline. Features modern design, high-end finishes, and top-tier amenities.",
    area: 2200,
    price: 140000,
    bedrooms: 3,
    bathrooms: 3,
    amenities: [
      "Rooftop pool",
      "Fitness center",
      "Concierge service",
      "Valet parking"
    ],
    nearbyAttractions: "Close to cultural landmarks, fine dining, and shopping.",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ]
  }
];

export default properties