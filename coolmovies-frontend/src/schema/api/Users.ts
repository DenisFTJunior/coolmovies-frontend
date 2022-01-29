import { User } from "./User";

enum OrderType {
    ID_ASC,
    ID_DESC,
    NAME_ASC,
    NAME_DESC,
  }

export interface Users{
    allUsers:{
        users:User[]
    }
}

export interface UsersVars {
    condition? :{
        id:string,
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
    name:string,
    and:Filter,
    or:Filter,
    not:Filter
}