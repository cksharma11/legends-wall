import React from "react";
import Header from "../components/Header/Header";
import AddQuote from "../components/AddQuote/AddQuote";
import TheQuote from "../components/TheQuote/TheQuote";

const Home = () => (
  <div>
    <Header />
    <AddQuote />
    <TheQuote quote="Once a lagend said just" likes={100} />
  </div>
);

export default Home;
