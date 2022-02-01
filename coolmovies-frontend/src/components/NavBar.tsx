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
import useFetchingMovies from "../utils/hooks/useFetchMovies";
import { Movie } from "../schema/api/Movie";

const NavBar = () => {
  const dispatch = useStateDispatch();
  const { toogleSearch, setSearch } = actions;

  const stateMovie = useFetchingMovies();

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
          options={stateMovie.fetchedMovies.map((movie: Movie) => movie.title)}
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
