import React from "react";
import styles from "./Feed.module.css";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = () => {
  return (
    <div className={styles.feed}>
      <FeedModal />
      <FeedPhotos />
    </div>
  );
};

export default Feed;
