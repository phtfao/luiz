import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//import de componentes para a rota
import {HomeComponent} from "./views/home/home.component";
import {TarefaListComponent} from "./views/tarefa-list/tarefa-list.component";
import {TarefaCrudComponent} from "./views/tarefa-crud/tarefa-crud.component";
import {TarefaUpdateComponent} from "./components/tarefa/tarefa-update/tarefa-update.component";
import {TarefaDeleteComponent} from "./components/tarefa/tarefa-delete/tarefa-delete.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "tarefas",
    component: TarefaCrudComponent
  }, {
    path: "tarefas-lista",
    component: TarefaListComponent
  },{
    path: "tarefas/atualizar/:id",
    component: TarefaUpdateComponent
  },{
    path: "tarefas/excluir/:id",
    component: TarefaDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
