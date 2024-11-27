import React from 'react';

interface Props {
    stars: any;
}

const StarRating: React.FC<Props> = ({ stars }) => {
  const fullStar = '/img/components/reviews/full-star.svg'; // Replace with actual path
  const emptyStar = '/img/components/reviews/chevron-right-icon.svg'; // Replace with actual path

  // Generate star images based on review stars
  const starImages = Array.from({ length: 5 }, (_, index) =>
    index < stars ? fullStar : emptyStar
  );

  return (
    <>
      {starImages.map((star, index) => (
         <li key={index}>
            <picture className="">
                <img
                    id=""
                    alt={`${index + 1} star`}
                    className="full lazyloaded"
                    data-cy=""
                    data-src={star}
                    loading="lazy"
                    width="16"
                    height="15"
                    src={star}
                />
            </picture>
        </li>
      ))}
    </>
  );
};

export default StarRating;
