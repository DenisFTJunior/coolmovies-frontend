import { gql, useMutation, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { DirectorInput } from "../../../../schema/api/mutation/Director";
import { Director } from "../../../../schema/api/Director";

const SAVE_DIRECTOR_MUTATION = gql`
  mutation CreateMovieDirector($input: CreateCommentInput) {
    createMovieDirector(input: $input) {
      id: clientMutationId
    }
  }
`;

const saveDirector = (input: DirectorInput) => {
  return useMutation<Director, DirectorInput>(SAVE_DIRECTOR_MUTATION, {
    variables: input,
    client: moviesClient,
    refetchQueries: ["MovieDirector", "AllDirectors"],
  });
};

export default saveDirector;
