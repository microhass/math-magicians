import React, { useEffect, useState } from 'react';
import axios from 'axios';
import quoteURL from '../data/urls';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchQuote = async () => {
    const headers = {
      'X-Api-Key': 'puYtN2EHKwEQEVDxMdPfmg==43hrbKtRxVHhboVe',
    };

    try {
      setIsLoading(() => true);
      const res = await axios.get(quoteURL, {
        headers,
      });
      setQuote(res.data[0]);
    } catch (err) {
      setIsError(() => true);
    }

    setIsLoading(() => false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (isError) return <section>An error occured</section>;

  if (isLoading) return <section>Loading...</section>;

  return (
    <section>
      <span className="quote">{quote.quote}</span>
      <span className="author">
        {' '}
        {` - ${quote.author}`}
      </span>
    </section>
  );
};

export default Quote;
