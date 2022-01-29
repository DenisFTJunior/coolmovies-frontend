import { Director } from "./Director";

enum OrderType {
    ID_ASC,
    ID_DESC,
    AGE_ASC,
    AGE_DESC,
    NAME_ASC,
    NAME_DESC,
  }

export interface Directors{
    allMovieDirectors:{
        directors:Director[]
    }
}

export interface DirectorsVars {
    condition? :{
        id:string,
        age:number,
        name:string,
    }
    filter?:Filter
    orderBy?: OrderType
    offset?: number,
    last?:number,
    first?:number
}

interface Filter {
    id:string,
    age:number,
    name:string,
    and:Filter,
    or:Filter,
    not:Filter
}