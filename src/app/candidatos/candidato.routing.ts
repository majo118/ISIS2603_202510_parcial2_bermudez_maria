import { Routes, RouterModule } from '@angular/router';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';

const routes: Routes = [
  {  path: 'candidatos',
     component: CandidatosListComponent },
];

export const CandidatoRoutes = RouterModule.forChild(routes);
