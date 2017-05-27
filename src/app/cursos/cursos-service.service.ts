import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosServiceService {

  private cursos:any[] = [];

  emitirCursoCriado: EventEmitter<any> = new EventEmitter<any>();
  static criouNovoCurso: EventEmitter<any> = new EventEmitter<any>(); //única instância para todas as classes

  constructor(private _log: LogService) {

    for(let i = 1; i <= 20; i++){
      this.cursos.push({id: i, nome: 'Curso ' + i});
    }

    this._log.log('CursosServiceService invocado');

   }

   getCursos(): any[]{
     this._log.log('obtendo lista de cursos');
     return this.cursos;
   }

   addCurso(id, descricao){
     let curso = {id: id, nome: descricao};
     this._log.log(`Criando o curso ${curso.id}`);
     this.cursos.push(curso);
     this.emitirCursoCriado.emit(curso); //apenas para os da mesma instância

     CursosServiceService.criouNovoCurso.emit(curso); //broadcast para todas as instâncias desse serviço
   }

}
