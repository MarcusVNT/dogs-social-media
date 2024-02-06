import React from "react";
import styles from "./PhotoCommentsForm.module.css";
import TextArea from "../Forms/TextArea";
import CommentButton from "../Forms/CommentButton";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import { COMMENT_POST } from "../../Api";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem("token");
    if (token === null)
      return alert("Você precisa estar logado para comentar.");

    const { url, options } = COMMENT_POST({ id, token, body: { comment } });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }
  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <TextArea
        label="Faça um comentário:"
        id="comment"
        name="comment"
        value={comment}
        placeholder={"Faça um comentário..."}
        onChange={({ target }) => setComment(target.value)}
        rows="3"
        spellcheck={true}
      />
      <CommentButton />
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
