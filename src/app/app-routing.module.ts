import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  	path: '',
  	redirectTo: '/workspace/integrity-info/edit', pathMatch: 'full'
  },
  {
    path: 'workspace/integrity-info/edit',
    loadChildren: () => import('./integrity-info/integrity-info-editor/integrity-info-editor.module').then(m => m.IntegrityInfoEditorModule)
  },
  {
  	path: '**',
  	redirectTo: '/workspace/integrity-info/edit', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
