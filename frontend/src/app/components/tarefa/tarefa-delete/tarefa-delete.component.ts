import {Component, OnInit} from '@angular/core';
import {TarefaService} from "../tarefa.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tarefa-delete',
  templateUrl: './tarefa-delete.component.html',
  styleUrls: ['./tarefa-delete.component.css']
})
export class TarefaDeleteComponent implements OnInit {

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  excluirTarefa(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tarefaService.delete(id).subscribe(() => {
      this.tarefaService.showMessage('Tarefa excluída com sucesso');
      this.router.navigate(['tarefas-lista']);
    })
  }

  cancel(): void {
    this.router.navigate(['tarefas-lista'])
  }

}
