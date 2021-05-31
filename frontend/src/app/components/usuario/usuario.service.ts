import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "./usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = "http://127.0.0.1:8000/api/users";

  constructor(private http: HttpClient) { }

  list(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }
}
