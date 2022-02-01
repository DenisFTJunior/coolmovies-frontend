import { useEffect } from "react";

import { useStateDispatch } from "../stateManager/hooks/useDispatch";
import { useStateSelector } from "../stateManager/hooks/useSelector";
import { actions as movieActions } from "../stateManager/slice/async/movie/movieSlice";

const useFetchingMovies = (vars: any = {}) => {
  const dispatch = useStateDispatch();
  const { clearMovieData, fetchMovies } = movieActions;
  const stateMovie = useStateSelector((state) => state.movie);
  if (stateMovie) dispatch(clearMovieData());

  useEffect(() => {
    dispatch(fetchMovies({ vars }));
  }, []);

  return stateMovie;
};

export default useFetchingMovies;
