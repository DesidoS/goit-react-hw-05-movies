import { fetchTrend } from '../api/index';
import { useState, useEffect } from 'react';
import { List } from '../components/List';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const location = useLocation();
  const [content, setContent] = useState([]);

  useEffect(() => {
    const loadingContent = async () => {
      const { results } = await fetchTrend();
      setContent(results);
    };
    loadingContent();
  }, []);

  return <List state={location} content={content} />;
};
