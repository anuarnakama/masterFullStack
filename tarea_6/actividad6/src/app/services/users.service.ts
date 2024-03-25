import { inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { IResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  httpClient = inject(HttpClient);
  baseUrl = 'https://peticiones.online/api/users';

  constructor() { }

  getAll() : Observable<IResponse>
  {
    return this.httpClient.get<IResponse>(this.baseUrl);
    //return this.usuarios;
  }

  getById(id:string): Promise<IUser>{
    return lastValueFrom(this.httpClient.get<IUser>(`${this.baseUrl}/${id}`));
  }

  deleteById(id:string): Promise<IUser>{
    return lastValueFrom(this.httpClient.delete<IUser>(`${this.baseUrl}/${id}`));
  }
  


}
