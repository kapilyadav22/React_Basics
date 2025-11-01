import React from "react";

const LiveStream = () => {
  return (
    <div style={{
        margin: "5px"
    }}>
      <iframe
        width="700"
        height="500"
        src="https://www.youtube.com/embed/uHAGL7wj4Rk?si=7Yck5SsERc5Y1UCV"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LiveStream;
