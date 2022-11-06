import { fatchSearchMovies } from '../api/index';
import { useState, useEffect } from 'react';
import { List } from '../components/List';
import { useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const location = useLocation();
  const [content, setContent] = useState([]);
  const [request, setRequest] = useState(search ?? '');

  const onInputChange = e => {
    setRequest(e.currentTarget.value);
    setSearchParams({ search: e.currentTarget.value });
  };

  useEffect(() => {
    if (request === '') return;
    const loadingContent = async search => {
      const { results } = await fatchSearchMovies(search);
      setContent([...results]);
    };
    loadingContent(search);
  }, []);
  return (
    <main>
      <h1>Welcome movies</h1>
      <form>
        <input
          name="request"
          type="text"
          autoFocus
          placeholder="Search movies"
          value={request}
          onChange={onInputChange}
        />
      </form>
      <List state={location} content={content} />
    </main>
  );
};

export default Movies;
