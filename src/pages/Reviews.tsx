import React, { useEffect, useState } from 'react';
import '../styles/reviews.css'
import ReviewsContainer from '../container/Reviews';
import Footer from '../components/footer';
import AllReviews from '../data/all-reviews.json'
import { useParams } from 'react-router-dom'
interface Props{
}


const getReviews = (page: number): any[] => {
  const reviewsPerPage = 20;
  const totalReviews = AllReviews.length;
  
  // Calculate start and end indices
  const start = (page - 1) * reviewsPerPage;
  const end = start + reviewsPerPage * 2;

  // Ensure indices are within bounds
  if (start >= totalReviews) {
    return []; // Return empty array if page number is out of range
  }

  // Slice the array to get the required items
  return AllReviews.slice(start, Math.min(end, totalReviews));
};

const Reviews: React.FC<Props> = ({}) => {
    const params = new URLSearchParams(window.location.search);
    const page = Number(params.get('page') || 1);

    const [currentPage, setCurrentPage] = useState(page)
    const [reviewsArray, setReviewsArray] = useState(getReviews(currentPage))

    useEffect(() =>{
        document.title = "Reviews | PuppySpot";
    }, []);

    useEffect(()=>{
        setReviewsArray(getReviews(currentPage))
    }, [currentPage])

  return (
    <>
        <ReviewsContainer reviewsArray={reviewsArray} setCurrentPage={setCurrentPage} />
        <Footer />
    </>
  );
}

export default Reviews;
