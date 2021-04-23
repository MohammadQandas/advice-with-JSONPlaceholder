import React, { useState, useEffect } from "react";
import axios from "axios";
import "./advice.css";
const Advice = () => {
  const [number, setNumber] = useState(1);

  const [quote, setQuote] = useState([]);
  const fetchAdvice = async () => {
    const res = await axios.get(`https://api.adviceslip.com/advice`);
    const { advice } = res.data.slip;
    setQuote(advice);
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <sectigron className="app">
      <header className="header">{quote}</header>
      <div className="button1">
        <button onClick={() => setNumber(fetchAdvice())}>New Advice</button>
      </div>
    </sectigron>
  );
};

export default Advice;
