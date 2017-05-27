import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CursosComponent } from '../cursos/cursos.component';

import { CursosServiceService } from '../cursos/cursos-service.service';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[
    CursosComponent
  ],
  providers: [
    CursosServiceService
  ]
})
export class CursoModule { }
