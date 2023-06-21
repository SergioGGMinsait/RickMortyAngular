import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {
    path: 'characters/:idCharacter',
    loadChildren: () =>
      import('./pages/character-detail/character-detail.module').then(
        (m) => m.CharacterDetailModule
      ),
  },

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
