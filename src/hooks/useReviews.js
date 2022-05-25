import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);
  return [reviews, setReviews];
};

export default useReviews;