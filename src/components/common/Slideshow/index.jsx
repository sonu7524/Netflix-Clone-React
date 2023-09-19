import React, {useState} from "react";
import "./styles.css";

function Slideshow({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 4 : prevIndex - 1
      );
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 4 ? 0 : prevIndex + 1
      );
    };
  
    const visibleImages = images.slice(currentIndex, currentIndex + 4);
  
    return (
      <div className="slideshow-container">
        <div className="slide">
          {visibleImages.map((image, index) => (
            <img className="image" key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    );
  };

  export default Slideshow;

