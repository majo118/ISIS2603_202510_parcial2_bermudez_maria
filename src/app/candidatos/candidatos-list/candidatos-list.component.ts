import { Component, OnInit, Output } from '@angular/core';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';


@Component({
  selector: 'app-candidatos-list',
  standalone: false,
  templateUrl: './candidatos-list.component.html',
  styleUrl: './candidatos-list.component.css'
})
export class CandidatosListComponent implements OnInit {

  candidatos: Array<Candidato> = [];
  selectedCandidato!: Candidato;
  selected: boolean = false;

  constructor(private candidatoService: CandidatoService) { }

  getCandidatos(){
    this.candidatoService.getCandidatos().subscribe(candidatos=>{
      this.candidatos = candidatos;
    })
  }

  selectAuthor(candidato: Candidato){
    this.selectedCandidato = candidato;
    this.selected = true;
  }

  ngOnInit() {
    this.getCandidatos();
  }
}
