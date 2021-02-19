import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos');
  }

  createPlayer(formData: any) {
    return this.http.post('https://reqres.in/api/users', formData);
  }

  updatePlayer(formData: any, id: number) {
    return this.http.put(`https://reqres.in/api/users/${id}`, formData);
  }

  deletePlayer(id: number) {
    return this.http.delete(`https://reqres.in/api/users/${id}`);
  }
}
