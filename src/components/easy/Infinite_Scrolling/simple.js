import React, { useEffect, useState } from "react";

export default function Meme() {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >= document.body.scrollHeight &&
      !isLoading
    ) {
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      const res = await fetch("https://meme-api.com/gimme/20");
      const json = await res.json();
      setMemes((prev) => [...prev, ...json.memes]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {memes.map((meme, i) => (
        <div key={i}>
          <h3>{meme.title}</h3>
          <img src={meme.url} height="250" />
        </div>
      ))}
    </div>
  );
}
