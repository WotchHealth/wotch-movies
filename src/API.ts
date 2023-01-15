export type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  budget: number;
  runtime: number;
  revenue: number;
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Cast = {
  character: string;
  credit_id: string;
  name: string;
  profile_path: string;
};

export type Crew = {
  job: string;
  name: string;
  credit_id: number;
};

export type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

// Task: Implement APIs
const apis = {
  fetchMovies: (searchTerm: string, page: number): Promise<Movies> => {
    return new Promise(() => "not implemented yet");
  },
  fetchMovie: (movieId: string): Promise<Movie> => {
    return new Promise(() => "not implemented yet");
  },
  fetchCredits: (movieId: string): Promise<Credits> => {
    return new Promise(() => "not implemented yet");
  },
};

export default apis;
