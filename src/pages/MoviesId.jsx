import { fatchMovieId } from '../api/index';
import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Container, Li, LinkItem, Img } from './MoviesId.styled';

export const MoviesId = () => {
  const [content, setContent] = useState([]);
  const movieId = useParams();
  const location = useLocation();
  const [backUrlSec] = useState(location?.state?.from);

  useEffect(() => {
    const loadingContent = async id => {
      const { data } = await fatchMovieId(id);
      setContent(data);
    };
    loadingContent(movieId);
  }, [movieId]);

  const backUrl = location?.state?.from;

  if (content.length === 0) return;

  return (
    <main>
      <Li to={backUrl ?? backUrlSec ?? '/home'}> &gt; Back</Li>

      <Container>
        <Img
          src={
            content.poster_path
              ? `https://image.tmdb.org/t/p/w500` + content.poster_path
              : `https://achcity.com/images/photos/medium/article31267.jpg`
          }
          alt={content.title}
        />
        <div>
          <h1>
            {content.original_title}
            {content.release_date.length
              ? ` (${content.release_date.substr(0, 4)})`
              : null}
          </h1>
          <h2>Overview</h2>
          <p>{content.overview}</p>
          <h2>Genres</h2>
          <ul>
            <Container>
              {content.genres.map(({ name }) => {
                return <LinkItem key={name}>{name}</LinkItem>;
              })}
            </Container>
          </ul>
        </div>
      </Container>
      <ul>
        <LinkItem>
          <Li state={backUrl} to={{ pathname: `reviews` }}>
            &gt; Reviews
          </Li>
        </LinkItem>
        <LinkItem>
          <Li to="cast"> &gt; Cast</Li>
        </LinkItem>
      </ul>
      <Outlet />
    </main>
  );
};
