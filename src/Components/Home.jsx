import React from "react";
import styles from "./Home.module.css";
import Feed from "./Feed/Feed";
import Head from "./Helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Rede Social" description="Home do site Dogs" />
      <Feed />
    </section>
  );
};

export default Home;
