import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntegrityInfoEditorComponent } from './integrity-info-editor.component';

const routes: Routes = [
	{
		path: '',
		component: IntegrityInfoEditorComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrityInfoEditorRoutingModule { }
