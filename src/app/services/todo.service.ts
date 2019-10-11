import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../users/model/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Todos } from '../todos/model/todos';
import { Page } from '../page/page';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: string = `${environment.baseUrl}/todos`;

  constructor(private http: HttpClient) { }

  //add todos
  addTodos(todo: Todos): Observable<Todos> {
    return this.http.post<Todos>(this.baseUrl, todo);
  }

  deleteTodos(id: string): Observable<Todos> {
    return this.http.delete<Todos>(`${this.baseUrl}/${id}`);
  }

  
  updateTodos(todo: Todos): Observable<Todos> {
    return this.http.put<Todos>(`${this.baseUrl}/${todo.id}`, todo);
  }

  
  getTodos(page: number, pageSize: number, searchText?: string): Observable<Page<Todos>> {
    let params = new HttpParams()
      .set("page", (page - 1).toString())
      .set("size", pageSize.toString());
    if (searchText) {
      params = params
        .set("name", searchText)
        .set("description", searchText)
        .set("status", searchText)
        .set("owner", searchText);
    }
    return this.http.get<Page<Todos>>(this.baseUrl, { params });
  }

  
  getTodo(id: string): Observable<Todos> {
    return this.http.get<Todos>(`${this.baseUrl}/${id}`);
  }

  
  getAllTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(this.baseUrl);
  }
}
