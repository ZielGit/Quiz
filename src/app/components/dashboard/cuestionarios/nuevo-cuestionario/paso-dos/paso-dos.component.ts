import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pregunta } from 'src/app/models/pregunta';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent {
  tituloCuestionario: string;
  descripcionCuestionario: string;
  listPreguntas: Pregunta[] = [];

  constructor(private cuestionarioService: CuestionarioService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.tituloCuestionario = this.cuestionarioService.tituloCuestionario;
    this.descripcionCuestionario = this.cuestionarioService.descripcionCuestionario;
  }

  guardarPregunta(pregunta: Pregunta): void {
    this.listPreguntas.push(pregunta);
  }

  eliminarPregunta(index: number): void {
    this.listPreguntas.splice(index, 1);
  }
}
