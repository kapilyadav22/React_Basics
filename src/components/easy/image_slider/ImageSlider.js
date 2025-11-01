import React, { useEffect } from "react";

const images = [
  "https://m.media-amazon.com/images/I/81OXEQrFPTL._AC_UF1000,1000_QL80_.jpg",
  "https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwZmxvd2VyfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_jmCetFSfxgJlSN14vJVH1y8iMC6-lZbDWagQNdN3bt-UMEUlKv5XP6AIvAF0iWY_ug&usqp=CAU",
  "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt75ca74b29e44a4a7/6668df6408a78ca63408a238/beautiful-flowers-cherry-blossoms.jpg?q=70&width=3840&auto=webp",
];

const ImageSlider = () => {
  const [active, setActive] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      loadNextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const loadPrevImage = () => {
    if (active === 0) {
      setActive(images.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  const loadNextImage = () => {
    if (active === images.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <button onClick={loadPrevImage}>Prev</button>

        <img
          style={{ width: "500px", height: "300px" }}
        //   loading="lazy"
          src={images[active]}
          alt="slider"
        />
        <button onClick={loadNextImage}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;


//follow ups:
//1. How would you add transition effects between image changes?
//2. How can you make the slider responsive to different screen sizes?
//3. How would you implement lazy loading for the images in the slider?
//4. How can you add indicators to show which image is currently active?
//5. add some part of previous and next image on the sides of current image
//6. add prev and next button on the sides of the image with some transparency

