import { fatchSearchMovies } from '../api/index';
import { useState, useEffect } from 'react';
import { List } from '../components/List';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [content, setContent] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const search = searchParams.get('search');
    if (!search) return;
    const loadingContent = async search => {
      const { results } = await fatchSearchMovies(search);
      setContent([...results]);
    };
    loadingContent(search);
  }, [searchParams]);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.elements.request.value;
    if (searchQuery.trim('') === '') return alert('Please, enter field');
    setQuery(searchQuery);
    setSearchParams({ search: searchQuery });
    form.reset();
  };

  useEffect(() => {
    if (query === '') return;
    const loadingContent = async q => {
      const { results } = await fatchSearchMovies(q);
      setContent([...results]);
    };
    loadingContent(query);
  }, [query]);

  return (
    <main>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormInput
          name="request"
          type="text"
          autoFocus
          placeholder="Search movies"
        />
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>🔎</SearchFormButtonLabel>
        </SearchFormButton>
      </SearchForm>
      <List state={location} content={content} />
    </main>
  );
};

export default Movies;
