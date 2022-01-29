import { gql, useMutation, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import {
  SaveMovieInput,
  SaveMovieVars,
} from "../../../../schema/api/mutation/Movie";
import { Movie } from "../../../../schema/api/Movie";

const SAVE_MOVIE_MUTATION = gql`
  mutation CreateMovie($input: CreateMovieInput) {
    createMovie(input: $input) {
      id: clientMutationId
    }
  }
`;

const saveMovie = (input: SaveMovieVars) => {
  return useMutation<Movie, SaveMovieInput>(SAVE_MOVIE_MUTATION, {
    variables: { input },
    client: moviesClient,
    refetchQueries: ["Movie", "Movies"],
  });
};

export default saveMovie;
