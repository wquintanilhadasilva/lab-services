import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CursosServiceService } from '../cursos/cursos-service.service';
import { CriarCursoComponent } from '../criar-curso/criar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  providers: [
    CursosServiceService
  ],
  exports:[
    CriarCursoComponent
  ]
})
export class CriarCursoModule { }
