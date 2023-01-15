// Components
import Thumb from "../Thumb";
// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
// Styles
import styles from "./MovieInfo.module.scss";

// Types
import { MovieState } from "../../hooks/useMovieFetch";

type Props = {
  movie: MovieState;
};

const bgPath = (backdrop_path: string) =>
  backdrop_path
    ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path})`
    : "#000";

const MovieInfo = () => (
  <div
    className={styles.wrapper}
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "40px 20px",
      animation: "animateMovieInfo 1s",
    }}
  >
    <div className={styles.content}>
      <Thumb image={"movie-poster"} clickable={false} />
      <div className={styles.text}>
        {/* 
          Task: Complete information section
        */}
      </div>
    </div>
  </div>
);

export default MovieInfo;
