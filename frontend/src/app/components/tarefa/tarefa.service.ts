import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {Tarefa} from "./tarefa.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  baseUrl = "http://127.0.0.1:8000/api/tarefas";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.baseUrl, tarefa);
  }

  list(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.baseUrl);
  }

  listById(id: string): Observable<Tarefa>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Tarefa>(url);
  }

  update(tarefa: Tarefa): Observable<Tarefa>{
    const url = `${this.baseUrl}/${tarefa.id}`;
    return this.http.put<Tarefa>(url, tarefa);
  }

  delete(id: string): Observable<Tarefa>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Tarefa>(url)
  }
}
