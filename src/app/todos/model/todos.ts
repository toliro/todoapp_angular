import { Todostatus } from '../enums/todostatus.enum';

export interface Todos {
    id: string;
    name: string;
    description: string;
    status: Todostatus;
    owner: string;
}
