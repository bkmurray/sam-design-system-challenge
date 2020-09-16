import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamEntityDisplayComponent } from './entity-display.component';

const routes: Routes = [
	{
		path: '',
		component: SamEntityDisplayComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityDisplayRoutingModule { }
