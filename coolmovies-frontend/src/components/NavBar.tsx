import { Box, Button, ButtonGroup } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import RecommendIcon from "@mui/icons-material/Recommend";

import { useStateDispatch } from "../utils/stateManager/hooks/useDispatch";
import { actions } from "../utils/stateManager/slice/sync/searchSlice";

const NavBar = () => {
  const dispatch = useStateDispatch();
  const { toogleSearch } = actions;
  return (
    <Box
      sx={{
        position: "absolute",
        top: "10vh",
        left: "2vh",
      }}
    >
      <ButtonGroup orientation="vertical" aria-label="vertical nav bar">
        <Button key="home" href="/" startIcon={<HomeIcon />}></Button>,
        <Button
          key="search"
          onClick={() => dispatch(toogleSearch())}
          startIcon={<SearchIcon />}
        ></Button>
        ,
        <Button
          key="Recommendations"
          href="/recommended"
          startIcon={<RecommendIcon />}
        ></Button>
        ,
      </ButtonGroup>
    </Box>
  );
};

export default NavBar;
