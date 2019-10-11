import { Todostatus } from '../enums/TodoStatus.enum';

export interface Todos {
    id: string;
    name: string;
    description: string;
    status: Todostatus;
    owner: string;
}
