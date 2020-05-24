import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  	path: '',
  	redirectTo: '/workspace/integrity-info', pathMatch: 'full'
  },
  {
    path: 'workspace/integrity-info',
    loadChildren: () => import('./integrity-info/integrity-info-workspace/integrity-info-workspace.module').then(m => m.IntegrityInfoWorkspaceModule)
  },
  {
  	path: '**',
  	redirectTo: '/workspace/integrity-info', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
