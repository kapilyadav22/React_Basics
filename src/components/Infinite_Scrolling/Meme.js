import React, { useEffect, useState } from "react";
// import MemeCard from './MemeCard';
// import Shimmer from './Shimmer';

export default function Meme() {
  const [memes, setMemes] = useState([]);
  // const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    //scrollY - how much I have scrolled
    // innerHeight - heigh of the window(visible setion)
    // document.body.scrollHeight - total height of the web page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    try {
      // setShowShimmer(true);
      const data = await fetch("https://meme-api.com/gimme/20");
      const json = await data.json();
      console.log(json);
      setMemes((memes) => [...memes, ...json.memes]);
      // setShowShimmer(true);
    } catch (err) {
      console.log(err);
      // setShowShimmer(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {memes &&
        memes.map((meme, i) => {
          return (
            <div
              key={i}
              style={{
                // height: "300px",
                // backgroundColor: "lightgrey",
                marginBottom: "5px",
                borderRadius:'15px'
              }}
            >
              <h3>{meme.title}</h3>

              <img src={meme.url} height={"250px"}></img>
            </div>
          );
        })}
      {/* {
        showShimmer && <Shimmer/>
    } */}
    </div>
  );
}

//https://meme-api.com/gimme/20
