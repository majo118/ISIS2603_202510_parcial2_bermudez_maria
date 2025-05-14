import { Routes, RouterModule } from '@angular/router';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {  path: 'candidatos',
         component: CandidatosListComponent },
         
     {  path: 'candidatos',
         component: CandidatosDetailComponent },
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})

export class CandidatoRoutingModule { }
