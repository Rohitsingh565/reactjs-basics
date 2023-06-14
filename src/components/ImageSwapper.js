import React from 'react'
import { useState, useEffect } from 'react';

const ImageSwapper = () => {
    const images = ["https://pps.whatsapp.net/v/t61.24694-24/345459858_3476220892645931_1475142724462053772_n.jpg?ccb=11-4&oh=01_AdQ9J3KM8fDMML9bsGMfKNdldjqvA8KUrr04UIaRRMde6g&oe=6495D79F", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZyOpzMZDaV-Cs1E-hjOJ-Dr2m4UIqc6j7w&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bNnEIRI8eyKFqSIvzq3KQexEK26OMRGtyM06g3E03nPBR7iAWDTCR--9xeHJo2K5KUU&usqp=CAU"];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 2000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex, images.length])


  return (
    <div>
            <img style={{borderRadius:"50%"}} width={350} height={350} src={images[currentIndex]} />
        </div>

  )
}

export default ImageSwapper