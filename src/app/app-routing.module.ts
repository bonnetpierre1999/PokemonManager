import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsComponent} from './composants/pokemons/pokemons.component';
import {GenerationsComponent} from './composants/generations/generations.component';


const routes: Routes = [
  {path: 'Pokemon', component: PokemonsComponent},
  {path: 'Generation', component: GenerationsComponent},
  {path: '', component: GenerationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
