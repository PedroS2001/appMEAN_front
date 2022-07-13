import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  public myForm!: FormGroup;
  private imagen!: any;
  constructor(private fb: FormBuilder, private _service: HttpService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'nombre': ['', [Validators.required, Validators.minLength(2)]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'imagen': ['', [Validators.required]]
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
    formData.append('imagen', this.imagen);

    //console.log(nombre, correo, clave, this.imagen, jwt);
    if (this.myForm.valid) {
      this._service.registrarUsuario(formData, jwt)
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
