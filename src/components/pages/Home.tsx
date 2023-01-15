// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";
// Components
import HeroImage from "../HeroImage";
import Grid from "../Grid";
import Thumb from "../Thumb";
import SearchBar from "../SearchBar";

// Hook
import { useHomeFetch } from "../../hooks/useHomeFetch";
// Image
import NoImage from "../../images/no_image.jpg";

const Home = () => {
  const { state, error, searchTerm } = useHomeFetch();

  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            clickable
            movieId={movie.id}
          />
        ))}
      </Grid>

      {/* 

        Task: Add "loading button" that fetches more movies to the list

      */}
    </>
  );
};

export default Home;
