import {Component, OnInit} from '@angular/core';
import {Tarefa} from "../../components/tarefa/tarefa.model";
import {TarefaService} from "../../components/tarefa/tarefa.service";
import {CalendarOptions} from '@fullcalendar/angular';

@Component({
  selector: 'app-tarefa-crud',
  templateUrl: './tarefa-crud.component.html',
  styleUrls: ['./tarefa-crud.component.css']
})
export class TarefaCrudComponent implements OnInit {

  loadingTarefas: boolean = false;
  arr_events: { title: string, date: string }[];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'pt',
    buttonText: {
      today: 'hoje',
      month: 'mês',
      week: 'semana',
      day: 'dia',
      list: 'lista'
    },
  };

  constructor(private tarefaService: TarefaService) {
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.tarefaService.list().subscribe((tarefas) => {
      this.loadingTarefas = true;
      this.preencherArrayTarefas(tarefas);
    })
  }

  preencherArrayTarefas(tarefas: Tarefa[]): void {
    let arrEventData: { title: string, date: string }[][],
      arrFormatEnventData: { title: string, date: string }[] = [];
    arrEventData = tarefas.map(tarefa => {
      switch (tarefa.periodo) {
        case 'F':
          return this.formatarDataTarefa(0, tarefa);
        case 'G':
          return this.formatarDataTarefa(1, tarefa);
        case 'H':
          return this.formatarDataTarefa(2, tarefa);
        case 'I':
          return this.formatarDataTarefa(3, tarefa);
        case 'J':
          return this.formatarDataTarefa(4, tarefa);
        case 'L':
          return this.formatarDataTarefa(5, tarefa);
        case 'M':
          return this.formatarDataTarefa(6, tarefa);

      }
    })

    arrEventData.map(eventData => {
      eventData.map(ed => {
        arrFormatEnventData.push(ed);
      });
    })
    this.arr_events = arrFormatEnventData;
    this.calendarOptions.events = arrFormatEnventData;
  }

  formatarDataTarefa(intWeekDay, tarefa: Tarefa): { title: string, date: string }[] {
    let d = new Date();
    let getTot = this.diasNoMes(d.getMonth() + 1, d.getFullYear()); //Get total days in a month
    let arrDatasMes = [];

    for (let i = 1; i <= getTot; i++) {
      let newDate = new Date(d.getFullYear(), d.getMonth(), i)
      if (newDate.getDay() == intWeekDay) {
        arrDatasMes.push(newDate.toISOString().split('T')[0]);
      }
    }

    return arrDatasMes.map(dtTarefa => {
      return {
        date: dtTarefa,
        title: `${tarefa.nome_usuario}: ${tarefa.descricao}`,
        backgroundColor: tarefa.projeto_id === 1 ? '#32CD32' : tarefa.projeto_id === 2 ? '#4c4cff' : '#808080',
        borderColor: tarefa.projeto_id === 1 ? '#32CD32' : tarefa.projeto_id === 2 ? '#4c4cff' : '#808080'
      };
    })
  }

  diasNoMes(month, year) {
    return new Date(year, month, 0).getDate();
  }
}
