import React from "react";
import Header from "../components/Header/Header";
import AddQuote from "../components/AddQuote/AddQuote";
import httpService from "../httpService/httpService";
import QuoteWall from "../components/QuoteWall/QuoteWall";

const Home = ({ quotes, subQuotes }) => {
  console.log({subQuotes})
  return (
    <div>
      <Header />
      <AddQuote />
      <QuoteWall quotes={quotes} subQuotes={subQuotes}/>
    </div>
  );
};

Home.getInitialProps = async () => {
  const quotes = await httpService.get("http://localhost:8080/quotes");
  const subQuotes = await httpService.get("http://localhost:8080/subQuotes");

  return { quotes, subQuotes };
};

export default Home;
