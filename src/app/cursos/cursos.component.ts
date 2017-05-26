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

  ngOnInit() {
    this.cursos = this._cursosServices.getCursos();
  }

}
