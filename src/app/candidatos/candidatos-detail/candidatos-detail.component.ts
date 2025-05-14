import { Component, OnInit, Input } from '@angular/core';
import { Candidato } from '../candidato';
import { ActivatedRoute } from '@angular/router';
import { CandidatoService } from '../candidato.service';

@Component({
  selector: 'app-candidatos-detail',
  standalone: false,
  templateUrl: './candidatos-detail.component.html',
  styleUrl: './candidatos-detail.component.css'
})
export class CandidatosDetailComponent implements OnInit {

  candidatoId!: string;
  @Input() candidatoDetail!: Candidato;

  constructor(
    private route: ActivatedRoute,
    private candidatoService: CandidatoService
  ) {}

  getCandidato(){
    this.candidatoService.getCandidato(this.candidatoId).subscribe(apiData=>{
      this.candidatoDetail = apiData;
    })
  }

  ngOnInit() {
    if(this.candidatoDetail === undefined){
      this.candidatoId = this.route.snapshot.paramMap.get('id')!
      if (this.candidatoId) {
        this.getCandidato();
      }
    }
  }
}
export { Candidato };

