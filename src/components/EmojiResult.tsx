import { useState } from "react";
import { getMemojify } from "../api/api";
import Button from "./Button";
import Modal from "./Modal";
import "../styles/index.css";

const EmojiResult = () => {
  const [movie, setMovie] = useState("");
  const [res, setRes] = useState("");
  const [showMovie, setShowMovie] = useState(false);
  const [isLoadingMovie, setLoadingMovie] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (movie === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    setLoadingMovie(true);

    getMemojify(movie)
      .then((res) => {
        setShowMovie(true);
        setRes(res);
      })
      .finally(() => {
        setLoadingMovie(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovie(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col mb-10">
        <input
          autoFocus
          autoComplete="off"
          onChange={handleChange}
          placeholder="🎥 Enter a movie title"
          className="p-[20px] rounded-[10px] mb-[20px] border-2 border-gray-300 focus:bg-colorFocus bg-primary text-xl"
        />
        <Button isLoading={isLoadingMovie} />
      </form>
      {isLoadingMovie && (
        <div className="loader-1 mx-auto">
          <span></span>
        </div>
      )}
      {showMovie && (
        <div className="mt-[20px] p-[20px] rounded-[10px] mb-[20px] border-2 border-gray-300 focus:bg-colorFocus bg-primary">
          <p>{res}</p>
        </div>
      )}

      {error && <Modal message="Please enter a movie title" />}
    </>
  );
};

export default EmojiResult;
