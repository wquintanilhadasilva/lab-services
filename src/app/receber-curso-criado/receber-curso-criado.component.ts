import { CursosServiceService } from './../cursos/cursos-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso:any;

  constructor(private _cursosService:CursosServiceService) { }

  ngOnInit() {
    this._cursosService.emitirCursoCriado.subscribe(
      c => this.curso = c
    );
  }

}
