import { gql, useQuery } from '@apollo/client'

import { moviesClient } from '../../client/movieClient';
import { Review, ReviewVars } from '../../../../schema/Review';

const QUERY = gql`
  query Movie($id: ID!) {
    movieReviewById(id: "") {
        id
        body
        movieId
        rating
        title
        userReviewerId
      }
  }
`

const getMovieQuery = ({ id }: ReviewVars) => {
  return useQuery<Review, ReviewVars>(QUERY, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    variables: { id },
    skip: !id,
    client: moviesClient
  });


}

export default getMovieQuery