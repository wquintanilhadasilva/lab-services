import { Component, OnInit } from '@angular/core';

import { CursosServiceService } from './../cursos/cursos-service.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers:[CursosServiceService] //Cria uma instância do serviço apenas para este component
})
export class CriarCursoComponent implements OnInit {

  constructor(private _cursosServices: CursosServiceService) { }
  
  cursos:any[];

  ngOnInit() {
    this.cursos = this._cursosServices.getCursos();
  }

  addCurso(id:string, nome:string){
    this._cursosServices.addCurso(id, nome);
  }
}
