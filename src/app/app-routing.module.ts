import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { GameCreateComponent } from './components/views/game/game-create/game-create.component';
import { GameDeleteComponent } from './components/views/game/game-delete/game-delete.component';
import { GameReadallComponent } from './components/views/game/game-readall/game-readall.component';
import { GameReadoneComponent } from './components/views/game/game-readone/game-readone.component';
import { GameUpdateComponent } from './components/views/game/game-update/game-update.component';

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
},
{
  path:'categories/update/:id',
  component:CategoriaUpdateComponent

},
{
  path:'categories/:id_cat/games',
  component:GameReadallComponent
},
{
  path:'categories/:id_cat/games/create_game',
  component:GameCreateComponent
},
{  path:'categories/:id_cat/games/:id/update',
    component:GameUpdateComponent
},
{
  path:'categories/:id_cat/games/:id/delete',
  component:GameDeleteComponent
},
{
  path:'categories/:id_cat/games/:id',
  component:GameReadoneComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
