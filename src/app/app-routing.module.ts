import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePage} from "./pages/home/home";

const routes: Routes = [
  {
    path: '', data: {title: 'Accueil'}, children:
      [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: HomePage},
      ],
  },
  {
    path: '**', redirectTo:'/', data: {title: 'Accueil'},
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
