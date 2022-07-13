import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {

  @Input() usuario!: Usuario;
  @Input() index!: number;
  
  @Output() userExport: EventEmitter<Usuario> = new EventEmitter<Usuario>();
  @Output() indice: EventEmitter<number> = new EventEmitter<number>();
  constructor(private _service: HttpService) { }

  ngOnInit(): void {
  }

  seleccionaUsuario(user: Usuario) {
    this.userExport.emit(user);
  }

  eliminarUsuario(user: Usuario) {
    let jwt = localStorage.getItem('token');
    console.log(user);
    this._service.eliminarUsuario(user.getEmail().toString(), jwt)
      .subscribe((datos: any) => {
        console.log(datos);
        this.indice.emit(this.index);
      },
        (err: any) => {
          console.log(err);
        })
  }

}
