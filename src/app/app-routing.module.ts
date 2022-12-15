import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path:'categories',
  component: CategoriaReadComponent
},
{
  path:'categories/create',
  component: CategoriaCreateComponent
},{
  path:'categories/delete/:id',
  component:CategoriaDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
