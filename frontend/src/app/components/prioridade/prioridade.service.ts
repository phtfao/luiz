import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Prioridade} from "./prioridade.model";

@Injectable({
  providedIn: 'root'
})
export class PrioridadeService {

  baseUrl = "http://127.0.0.1:8000/api/prioridades";

  constructor(private http: HttpClient) { }

  list(): Observable<Prioridade[]> {
    return this.http.get<Prioridade[]>(this.baseUrl);
  }
}
