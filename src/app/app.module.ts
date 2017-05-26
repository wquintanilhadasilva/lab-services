import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';

import { CursosServiceService } from './cursos/cursos-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CursosServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
