import {Component, OnInit} from '@angular/core';
import {TarefaService} from "../tarefa.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tarefa} from "../tarefa.model";
import {ProjetoService} from "../../projeto/projeto.service";
import {PrioridadeService} from "../../prioridade/prioridade.service";
import {UsuarioService} from "../../usuario/usuario.service";

@Component({
  selector: 'app-tarefa-update',
  templateUrl: './tarefa-update.component.html',
  styleUrls: ['./tarefa-update.component.css']
})
export class TarefaUpdateComponent implements OnInit {

  tarefa: Tarefa;
  projetosSelect: {};
  prioridadesSelect: {};
  usuariosSelect: {};

  constructor(
    private tarefaService: TarefaService,
    private projetoService: ProjetoService,
    private prioridadeService: PrioridadeService,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tarefaService.listById(id).subscribe(tarefa => {
      this.tarefa = tarefa;
    });

    //lista projetos
    this.projetoService.list().subscribe((projetos) => {
      this.projetosSelect = projetos.map(projeto => {
        return {value: projeto.id, viewValue: projeto.nome_projeto}
      })
    })
    //lista prioridades
    this.prioridadeService.list().subscribe((prioridades) => {
      this.prioridadesSelect = prioridades.map(prioridade => {
        return {value: prioridade.id, viewValue: prioridade.nome_prioridade}
      })
    })
    //lista usuarios
    this.usuarioService.list().subscribe((usuarios) => {
      this.usuariosSelect = usuarios.map(usuario => {
        return {value: usuario.id, viewValue: usuario.name}
      })
    })
  }

  atualizarTarefa(): void {
    this.tarefaService.update(this.tarefa).subscribe(() => {
      this.tarefaService.showMessage('Tarefa atualizada com sucesso');
      this.router.navigate(['tarefas-lista'])
    })
  }

  cancel(): void {
    this.router.navigate(['tarefas-lista'])
  }

  onChangePeriodo(periodo): void {
    this.tarefa.periodo = periodo;
  }

  onChangeProjeto(event): void {
    this.tarefa.projeto_id = event.value;
  }

  onChangePrioridade(event): void {
    this.tarefa.prioridade_id = event.value;
  }

  onChangeUsuario(event): void {
    this.tarefa.usuario_id = event.value;
  }
}
