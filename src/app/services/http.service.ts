import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }


  obtenerDatos(){
    return this.httpClient.get('http://localhost:5000/api/usuarios');
  }
}

