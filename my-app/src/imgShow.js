import { useState, useEffect } from "react";
import "./imgShow.css"; // Importing the CSS file

const ImgShow = () => {
  const list = [1, 2, 3, 4, 5];
  const [index, setIndex] = useState(0);

  const handleBack = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? list.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex < list.length - 1 ? prevIndex + 1 : 0));
  };

  // Set up auto transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Move to next every 5 seconds
    return () => clearInterval(interval); // Clean up the interval when the component is unmounted
  }, []); // Run the effect only once when the component mounts

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: index === 0 ? "none" : "transform 0.7s ease-in-out", // Remove transition when wrapping from last to first
        }}
      >
        {list.map((item, idx) => (
          <div key={idx} className="carousel-item">
            {item}
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={handleBack} className="carousel-btn prev-btn">
          Prev
        </button>
        <button onClick={handleNext} className="carousel-btn next-btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default ImgShow;
