import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';


const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'inscription',component: InscriptionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
