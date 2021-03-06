import { gql } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { SaveUserVars } from "../../../../schema/api/mutation/User";

const SAVE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id: clientMutationId
    }
  }
`;

const saveUser = (input: SaveUserVars) =>
  moviesClient.mutate({
    mutation: SAVE_USER_MUTATION,
    variables: { input },
    refetchQueries: ["User", "Users"],
  });

export default saveUser;
