import React from "react";
import Header from "../components/Header/Header";
import AddQuote from "../components/AddQuote/AddQuote";
import httpService from "../httpService/httpService";
import QuoteWall from "../components/QuoteWall/QuoteWall";

const PORT = process.env.PORT || 8080;

const Home = ({ quotes, subQuotes }) => {
  return (
    <div>
      <Header />
      <AddQuote />
      <QuoteWall quotes={quotes} subQuotes={subQuotes} />
    </div>
  );
};

Home.getInitialProps = async () => {
  const quotes = await httpService.get(`http://localhost:${PORT}/quotes`);
  const subQuotes = await httpService.get(`http://localhost:${PORT}/subQuotes`);

  return { quotes, subQuotes };
};

export default Home;
