import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fatchMovieId } from '../api/index';
import { Container, Li, LinkItem, Img } from './MoviesId.styled';

const MoviesId = () => {
  const [content, setContent] = useState([]);
  const movieId = useParams();
  const location = useLocation();
  const backRef = useRef(location?.state?.from);

  useEffect(() => {
    const loadingContent = async id => {
      const { data } = await fatchMovieId(id);
      setContent(data);
    };
    loadingContent(movieId);
  }, [movieId]);

  if (content.length === 0) return;
  const { poster_path, original_title, title, release_date, genres, overview } =
    content;
  return (
    <main>
      <Li to={backRef.current ?? '/home'}>&gt; Back</Li>

      <Container>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500` + poster_path
              : `https://achcity.com/images/photos/medium/article31267.jpg`
          }
          alt={title}
        />
        <div>
          <h1>
            {original_title}
            {release_date.length ? ` (${release_date.substr(0, 4)})` : null}
          </h1>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            <Container>
              {genres.map(({ name }) => {
                return <LinkItem key={name}>{name}</LinkItem>;
              })}
            </Container>
          </ul>
        </div>
      </Container>
      <ul>
        <LinkItem>
          <Li to="reviews">&gt; Reviews</Li>
        </LinkItem>
        <LinkItem>
          <Li to="cast"> &gt; Cast</Li>
        </LinkItem>
      </ul>
      <Outlet />
    </main>
  );
};

export default MoviesId;
