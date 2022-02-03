import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Movie, MovieVars } from "../../../../schema/api/Movie";

const QUERY = gql`
  query Movie($id: ID!) {
    movieById: movie(id: $id) {
      id
      movieDirectorId
      releaseDate
      title
      userCreatorId
      director: movieDirectorByMovieDirectorId {
        age
        id
        name
        nodeId
      }
      user: userByUserCreatorId {
        id
        name
        nodeId
      }
    }
  }
`;

const getMovieQuery = ({ id }: MovieVars) =>
  moviesClient.query({
    query: QUERY,
    variables: { id },
    fetchPolicy: "network-only",
  });

export default getMovieQuery;
