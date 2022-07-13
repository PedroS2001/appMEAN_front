import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public currentUser!: string;

  private host: string = 'http://localhost:5000/';
  private rutaUsuarios: string = 'api/usuarios';

  constructor(private httpClient: HttpClient) { }


  obtenerDatos() {
    return this.httpClient.get(this.host + this.rutaUsuarios);
  }

  login(correo: string, clave: string) {
    return this.httpClient.post(this.host + 'api/auth', {
      'email': correo,
      'password': clave
    });
  }

  registrarUsuario(formData: FormData, jwt: any) {
    return this.httpClient.post(this.host + this.rutaUsuarios, formData, {
      headers: {
        'Authorization': jwt
      }
    });
  }

  modificarUsuario(formData: FormData, jwt: any) {
    return this.httpClient.put(this.host + this.rutaUsuarios, formData, {
      headers: {
        'Authorization': jwt
      }
    })

  }


}

