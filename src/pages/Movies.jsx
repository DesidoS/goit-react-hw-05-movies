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
  const [q, setQ] = useState('');

  const onInputChange = e => {
    setRequest(e.currentTarget.value);
    setSearchParams({ search: e.currentTarget.value });
  };

  const resetFieldts = () => {
    setRequest('');
  };

  const onSubmit = e => {
    e.preventDefault();
    if (request.trim('') === '') {
      alert('Please, enter field');
      return;
    }
    setQ(request);
    resetFieldts();
  };

  useEffect(() => {
    if (request === '') return;
    const loadingContent = async search => {
      const { results } = await fatchSearchMovies(search);
      setContent([...results]);
    };
    loadingContent(search);
    // }, []);
  }, [search, request]);

  useEffect(() => {
    if (q === '') return;
    const loadingContent = async q => {
      const { results } = await fatchSearchMovies(q);
      setContent([...results]);
    };
    loadingContent(q);
  }, [q]);

  return (
    <main>
      <h1>Welcome movies</h1>
      <form onSubmit={onSubmit}>
        <input
          name="request"
          type="text"
          autoFocus
          placeholder="Search movies"
          value={request}
          onChange={onInputChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <List state={location} content={content} />
    </main>
  );
};

export default Movies;
