import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '', redirectTo: 'about', pathMatch: 'full'},
  // {path: 'about', component: AboutMeComponent},
  // {path: 'skills', component: SkillsComponent},
  // {path: 'experience', component: ExperienceComponent},
  // {path: 'projects', component: ProjectsComponent},
  // // {path: '**', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
