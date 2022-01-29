import { gql, useMutation } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import {
  UpdateUserInput,
  UpdateUserVars,
} from "../../../../schema/api/mutation/User";
import { User } from "../../../../schema/api/User";

const UPDATE_USER_BY_ID_MUTATION = gql`
  mutation UpdateUserById($input: UpdateUserByIdInput) {
    updateUserById(input: $input) {
      id: clientMutationId
    }
  }
`;

const UPDATE_USER_BY_NODEID_MUTATION = gql`
  mutation updateUser($input: UpdateUserInput) {
    updateUser(input: $input) {
      id: clientMutationId
    }
  }
`;

const updateUser = ({ nodeId, id, userPatch }: UpdateUserVars) => {
  const query = nodeId
    ? UPDATE_USER_BY_NODEID_MUTATION
    : UPDATE_USER_BY_ID_MUTATION;
  if (!id && !nodeId) return { error: "Impossible delete :(" };
  return useMutation<User, UpdateUserInput>(query, {
    variables: { input: { nodeId, id, userPatch } },
    client: moviesClient,
    refetchQueries: ["User", "Users"],
  });
};

export default updateUser;