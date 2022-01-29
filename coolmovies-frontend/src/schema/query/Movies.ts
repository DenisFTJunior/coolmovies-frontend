import { Movie } from "./Movie";

enum OrderType {
    ID_ASC,
    ID_DESC,
    TITLE_ASC,
    TITLE_DESC,
    RELEASE_DATE_ASC,
    RELEASE_DATE_DESC,
    USER_CREATOR_ID_ASC,
    USER_CREATOR_ID_DESC,
    MOVIE_DIRECTOR_ID_ASC,
    MOVIE_DIRECTOR_ID_DESC
  }

export interface Movies{
    allMovies:{
        movies:Movie[]
    }
}

export interface MoviesVars {
    condition? :{
        id:string,
        movieDirectorId:string,
        releaseDate:string,
        title:string,
        userCreatorId:string,
    }
    filter?:Filter
    orderBy?: OrderType
    offset?: number,
    last?:number,
    first?:number
}

interface Filter {
    id:string,
    movieDirectorId:string,
    releaseDate:string,
    title:string,
    userCreatorId:string,
    and:Filter,
    or:Filter,
    not:Filter
}