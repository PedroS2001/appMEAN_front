import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {

  @Input() usuario!: Usuario;
  @Output() userExport: EventEmitter<Usuario> = new EventEmitter<Usuario>();
  constructor() { }

  ngOnInit(): void {
  }

  seleccionaUsuario(user: Usuario) {
    this.userExport.emit(user);
  }

}
