import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';

const routes: Routes = [
  {
    path: `home`,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: `characters`,
    loadChildren: () =>
      import('./pages/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  { path: 'characters/:idCharacter', component: CharacterDetailComponent },

  {
    path: ``,
    redirectTo: `home`,
    pathMatch: `full`,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
