import { Injectable } from '@angular/core';

@Injectable()
export class CursosServiceService {

  private cursos:any[] = [];

  constructor() {

    for(let i = 1; i <= 20; i++){
      this.cursos.push({id: i, nome: 'Curso ' + i});
    }

   }

   getCursos(): any[]{
     return this.cursos;
   }

}
