import { Component, OnInit } from '@angular/core';
import {Tarefa} from "../../components/tarefa/tarefa.model";
import {TarefaService} from "../../components/tarefa/tarefa.service";

@Component({
  selector: 'app-tarefa-list',
  templateUrl: './tarefa-list.component.html',
  styleUrls: ['./tarefa-list.component.css']
})
export class TarefaListComponent implements OnInit {

  tarefas: Tarefa[];
  displayedColumns = ['id', 'descricao', 'periodo', 'nome_usuario', 'action'];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefaService.list().subscribe(tarefas => {
      this.tarefas = tarefas;
    })
  }

}
