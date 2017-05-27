import { LogService } from './shared/log.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CriarCursoModule } from './criar-curso/criar.curso.module';
import { CursoModule } from './cursos/curso.module';

import { CursosServiceService } from './cursos/cursos-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursoModule,
    CriarCursoModule
  ],
  providers: [
    CursosServiceService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
