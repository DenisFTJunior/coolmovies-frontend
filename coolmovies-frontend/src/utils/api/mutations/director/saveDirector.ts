import { gql, useMutation, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import {
  SaveDirectorInput,
  SaveDirectorVars,
} from "../../../../schema/api/mutation/Director";
import { Director } from "../../../../schema/api/Director";

const SAVE_DIRECTOR_MUTATION = gql`
  mutation CreateMovieDirector($input: CreateMovieDirectorInput) {
    createMovieDirector(input: $input) {
      id: clientMutationId
    }
  }
`;

const saveDirector = (input: SaveDirectorVars) =>
  moviesClient.mutate({
    mutation: SAVE_DIRECTOR_MUTATION,
    variables: { input },
    refetchQueries: ["MovieDirector", "AllDirectors"],
  });

export default saveDirector;
