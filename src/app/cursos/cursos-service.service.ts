import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosServiceService {

  private cursos:any[] = [];

  emitirCursoCriado: EventEmitter<any> = new EventEmitter<any>();
  static criouNovoCurso: EventEmitter<any> = new EventEmitter<any>(); //única instância para todas as classes

  constructor() {

    for(let i = 1; i <= 20; i++){
      this.cursos.push({id: i, nome: 'Curso ' + i});
    }

    console.log('CursosServiceService invocado');

   }

   getCursos(): any[]{
     return this.cursos;
   }

   addCurso(id, descricao){

     let curso = {id: id, nome: descricao};
     this.cursos.push(curso);
     this.emitirCursoCriado.emit(curso); //apenas para os da mesma instância

     CursosServiceService.criouNovoCurso.emit(curso); //broadcast para todas as instâncias desse serviço
   }

}
