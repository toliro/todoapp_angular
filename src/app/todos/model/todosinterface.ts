import { Enumstatus } from '../enums/enumstatus.enum';

export interface Todos {
    id: string;
    name: string;
    description: string;
    status: Enumstatus;
    owner: string;
}
