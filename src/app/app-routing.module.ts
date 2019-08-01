import { CienciaComponent } from './ciencia/ciencia.component';
import { EconomiaComponent } from './economia/economia.component';
import { HomeComponent } from './home/home.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminFormComponent },
  { path: 'economia', component: EconomiaComponent },
  { path: 'ciencia', component: CienciaComponent },
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
