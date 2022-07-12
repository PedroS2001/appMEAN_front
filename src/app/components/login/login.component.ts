import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm!: FormGroup;
  constructor(private fb: FormBuilder, private _service: HttpService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  clickLogin() {
    let correo = this.myForm.get('email')?.value;
    let clave = this.myForm.get('password')?.value;

    console.log(correo, clave);

    this._service.login(correo, clave).subscribe((datos: any) => {
      console.log(datos);
      if (datos.jwt) {
        localStorage.setItem('token', datos.jwt);
        this._service.currentUser = datos.usuario.email;
      }

    })


  }
}
