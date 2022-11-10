import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fatchSearchMovies } from '../api/index';
import { List } from '../components/List';
import { Form, FormButton, FormButtonLabel, FormInput } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [content, setContent] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const search = searchParams.get('search');
    if (!search) return;
    const loadingContent = async search => {
      const { results } = await fatchSearchMovies(search);
      setContent(results);
    };
    loadingContent(search);
  }, [searchParams]);

  useEffect(() => {
    if (!query) return;
    const loadingContent = async q => {
      const { results } = await fatchSearchMovies(q);
      setContent(results);
    };
    loadingContent(query);
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.elements.request.value;
    if (searchQuery.trim('') === '') return alert('Please, enter field');
    setQuery(searchQuery);
    setSearchParams({ search: searchQuery });
    form.reset();
  };

  return (
    <main>
      <Form onSubmit={onSubmit}>
        <FormInput
          name="request"
          type="text"
          autoFocus
          placeholder="Search movies"
        />
        <FormButton type="submit">
          <FormButtonLabel>🔎</FormButtonLabel>
        </FormButton>
      </Form>
      <List state={location} content={content} />
    </main>
  );
};

export default Movies;
