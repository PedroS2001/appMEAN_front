import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  userEdit!: Usuario;
  listaUsuarios: Usuario[] = new Array<Usuario>();
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.obtenerDatos().subscribe((datos: any) => {

      datos.forEach((element: any) => {
        let user: Usuario = new Usuario(element.email, element.password, element.nombre, element.imagen);
        this.listaUsuarios.push(user);
      });

    })
  }


  asignarUsuario(user: Usuario) {
    this.userEdit = user;
  }

  extraerUsuario(index: number) {
    this.listaUsuarios.splice(index, 1);
  }

}
