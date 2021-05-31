import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from './views/home/home.component';
import { TarefaCrudComponent } from './views/tarefa-crud/tarefa-crud.component';
import { AppRoutingModule } from './app-routing.module';
import { RedDirective } from './directives/red.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatChipsModule } from '@angular/material/chips';

//FULL CALENDAR
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { TarefaListComponent } from './views/tarefa-list/tarefa-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TarefaUpdateComponent } from './components/tarefa/tarefa-update/tarefa-update.component';
import { TarefaDeleteComponent } from './components/tarefa/tarefa-delete/tarefa-delete.component'; // a plugin


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TarefaCrudComponent,
    RedDirective,
    TarefaListComponent,
    TarefaUpdateComponent,
    TarefaDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatChipsModule,
    FullCalendarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
