import {Component, OnInit} from '@angular/core';
import {TarefaService} from "../../components/tarefa/tarefa.service";
import {Tarefa} from "../../components/tarefa/tarefa.model";
import {ProjetoService} from "../../components/projeto/projeto.service";
import {PrioridadeService} from "../../components/prioridade/prioridade.service";
import {UsuarioService} from "../../components/usuario/usuario.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tarefa: Tarefa = {
    descricao: null,
    periodo: 'F',
    prioridade_id: null,
    projeto_id: null,
    usuario_id: null,
    nome_usuario: null
  }

  projetosSelect: {};
  prioridadesSelect: {};
  usuariosSelect: {};

  constructor(
    private tarefaService: TarefaService,
    private projetoService: ProjetoService,
    private prioridadeService: PrioridadeService,
    private usuarioService: UsuarioService
  ) {
  }

  ngOnInit(): void {
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

  /**
   * @ CRIAR OS CAMPOS PARA PERIODO
   */

  createTarefa(): void {
    this.tarefaService.create(this.tarefa).subscribe(() => {
      this.tarefaService.showMessage('Operação executada com sucesso');
    })
  }

  onChangePeriodo(periodo): void{
    this.tarefa.periodo = periodo;
  }
  onChangeProjeto(event): void{
    this.tarefa.projeto_id = event.value;
  }
  onChangePrioridade(event): void{
    this.tarefa.prioridade_id = event.value;
  }
  onChangeUsuario(event): void{
    this.tarefa.usuario_id = event.value;
  }
}
