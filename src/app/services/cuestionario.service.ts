import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cuestionario } from '../models/cuestionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  tituloCuestionario: string;
  descripcionCuestionario: string;
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.tituloCuestionario = '';
    this.descripcionCuestionario = '';
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Cuestionario';
  }

  guardarCuestionario(cuestionario: Cuestionario): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, cuestionario);
  }
}
