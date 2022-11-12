import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModelDatemodeComponent } from './components/model-datemode/model-datemode.component';

const routes: Routes = [
  {
    path: 'model-datemode',
    component: ModelDatemodeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
