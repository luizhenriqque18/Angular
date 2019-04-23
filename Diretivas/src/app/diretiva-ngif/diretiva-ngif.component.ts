import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  constructor() { }

  public listCursos = [];
  public mostrarCurso: boolean;
  curso = 'Não existe curso para listar!!!';
  cursoxx1 = 'Lista de Cursos'

  ngOnInit() {
  }


  public mostrarCursoNow(): void{
      this.mostrarCurso = true;
  }

}
