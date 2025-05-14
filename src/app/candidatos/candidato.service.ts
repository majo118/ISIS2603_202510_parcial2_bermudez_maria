import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Candidato } from './candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private apiUrl: string = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/candidates.json';

constructor(private http: HttpClient) { }

 getCandidatos(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.apiUrl);
  }

  getCandidato(id: string): Observable<Candidato> {
    return this.http.get<Candidato>(this.apiUrl + "/" + id);
  }

}
