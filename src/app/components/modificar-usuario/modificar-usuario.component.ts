import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  @Input() user!: Usuario;

  public myForm!: FormGroup;
  private imagen!: any;
  constructor(private fb: FormBuilder, private _service: HttpService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'nombre': [this.user.getNombre(), [Validators.required, Validators.minLength(2)]],
      'email': [this.user.getEmail(), [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'imagen': ['', []]
    });

  }


  clickRegistro() {
    let nombre = this.myForm.get('nombre')?.value;
    let correo = this.myForm.get('email')?.value;
    let clave = this.myForm.get('password')?.value;

    let jwt = localStorage.getItem('token');

    let formData: FormData = new FormData();

    formData.append('nombre', nombre);
    formData.append('email', correo);
    formData.append('password', clave);
    if (this.imagen) {
      formData.append('imagen', this.imagen);
    }

    if (this.myForm.valid) {
      this._service.modificarUsuario(formData, jwt)
        .subscribe((datos: any) => {
          console.log(datos);
        })
    } else {
      console.log("form invalido");
    }
    
  }

  capturarFile(event: any) {
    console.log(event.target.files[0]);
    this.imagen = event.target.files[0];
    console.log(this.imagen)

  }

}
