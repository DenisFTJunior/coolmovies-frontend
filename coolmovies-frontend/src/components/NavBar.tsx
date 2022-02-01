import {
  Autocomplete,
  Box,
  Button,
  ButtonGroup,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import RecommendIcon from "@mui/icons-material/Recommend";

import { useStateDispatch } from "../utils/stateManager/hooks/useDispatch";
import { actions } from "../utils/stateManager/slice/sync/searchSlice";
import { actions as movieActions } from "../utils/stateManager/slice/async/movie/movieSlice";
import { useStateSelector } from "../utils/stateManager/hooks/useSelector";

const NavBar = () => {
  const dispatch = useStateDispatch();
  const { toogleSearch, setSearch } = actions;

  const stateMovie = useStateSelector((state) => state.movie);
  const modalState = useStateSelector((state) => state.modal);
  const { clearMovieData, fetchMovies } = movieActions;
  if (stateMovie) dispatch(clearMovieData());
  dispatch(fetchMovies({ vars: {} }));
  console.log("stateMovie", stateMovie);
  console.log("modalState", modalState);

  return (
    <Stack
      direction="row"
      spacing={1}
      alignContent="center"
      justifyContent="center"
    >
      <Button key="home" href="/" startIcon={<HomeIcon />} />
      <Button
        key="search"
        onClick={() => dispatch(toogleSearch())}
        startIcon={<SearchIcon />}
      >
        {/* <Autocomplete
            options={stateMovie.fetchedMovies.map(
              (movie: Movie) => movie.title
            )}
            renderInput={(params) => <TextField {...params} label="Search" />}
            onChange={(e, value) => dispatch(setSearch(`${value}`))}
          /> */}
      </Button>
      <Button
        key="Recommendations"
        href="#recommendedMovies"
        startIcon={<RecommendIcon />}
      />
    </Stack>
  );
};

export default NavBar;
