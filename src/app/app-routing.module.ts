import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  	path: '',
  	redirectTo: '/workspace/nonFed-workspace', pathMatch: 'full'
  },
  {
    path: 'workspace/nonFed-workspace',
    loadChildren: () => import('./integrity-info/integrity-info-workspace/integrity-info-workspace.module').then(m => m.IntegrityInfoWorkspaceModule)
  },
  {
    path: 'entity/display',
    loadChildren: () => import('./integrity-info/entity-display/entity-display.module').then(m => m.EntityDisplayPageModule)
  },
  {
  	path: '**',
  	redirectTo: '/workspace/nonFed-workspace', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
