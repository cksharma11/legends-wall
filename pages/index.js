import React from "react";
import Header from "../components/Header/Header";
import AddQuote from "../components/AddQuote/AddQuote";
import httpService from "../httpService/httpService";
import QuoteWall from "../components/QuoteWall/QuoteWall";

const Home = ({ quotes }) => {
  return (
    <div>
      <Header />
      <AddQuote />
      <QuoteWall quotes={quotes} />
    </div>
  );
};

Home.getInitialProps = async () => {
  const quotes = await httpService.get("http://localhost:8080/quotes");

  return { quotes };
};

export default Home;
