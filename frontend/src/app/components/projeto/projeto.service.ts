import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Projeto} from "./projeto.model";

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  baseUrl = "http://127.0.0.1:8000/api/projetos";

  constructor(private http: HttpClient) { }

  list(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.baseUrl);
  }
}
