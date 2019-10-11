import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../users/model/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Page } from '../page/page';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = `${environment.baseUrl}/users`;

  constructor(private http: HttpClient) { }

  addUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.baseUrl, user);
  }

  deleteUser(id: string): Observable<Users> {
    return this.http.delete<Users>(`${this.baseUrl}/${id}`);
  }

  
  updateUser(user: Users): Observable<Users> {
    return this.http.put<Users>(`${this.baseUrl}/${user.id}`, user);
  }

  
  getUsers(page: number, pageSize: number,searchText?: string): Observable<Page<Users>> {
    let params = new HttpParams()
      .set("page", (page - 1).toString())
      .set("size", pageSize.toString());
    if (searchText) {
      params = params
        .set("firstname", searchText)
        .set("lastname", searchText)
        .set("occupation", searchText);
    }
    return this.http.get<Page<Users>>(this.baseUrl, { params });
  }

  //get user = /user/id
  getUser(id: string): Observable<Users> {
    return this.http.get<Users>(`${this.baseUrl}/${id}`);
  }

//fetching /users 
  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl);
  }
}
