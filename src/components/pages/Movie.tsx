import BreadCrumb from "../BreadCrumb";
import MovieInfo from "../MovieInfo";
import MovieInfoBar from "../MovieInfoBar";

const Movie = () => {
  return (
    <>
      <BreadCrumb movieTitle="No Movie" />
      <MovieInfo />
      <MovieInfoBar time={0} budget={0} revenue={0} />

      {/* 
      
        TODO: Actors section should be here
        This should be similar to listing the movies.
        You can use the <Actor/> component for each actor.
      
      */}
    </>
  );
};

export default Movie;
