import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent {
  cambiarPassword: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cambiarPassword = this.fb.group({
      passwordAnterior: ['', Validators.required],
      nuevaPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, { validator: this.checkPassword });
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['nuevaPassword'].value;
    const confirmPass = group.controls['confirmPassword'].value;
    return pass === confirmPass ? null : { notSame: true }
  }

  guardarPassword(): void {

  }
}
