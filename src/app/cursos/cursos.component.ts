import { Component, OnInit } from '@angular/core';
import { CursosServiceService } from './cursos-service.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private _cursosServices:CursosServiceService) { }

  cursos:any[];
  novoCuro;

  ngOnInit() {
    this.cursos = this._cursosServices.getCursos();

    //recebe o curso criado por outro componente
    CursosServiceService.criouNovoCurso.subscribe(
      c => this.novoCuro = c
    );
  }

}
