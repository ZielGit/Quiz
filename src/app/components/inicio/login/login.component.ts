import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false;
  login: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  log() {
    const usuario: Usuario = {
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password
    }
    this.loading = true;
    setTimeout(() => {
      // if (condition) {
        
      // } else {
        
      // }
      this.loading = false;
    }, 3000);

    this.toastr.success('Hello world!', 'Toastr fun!');
    console.log(usuario);
  }
}
