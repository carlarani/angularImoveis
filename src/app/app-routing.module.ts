import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/list/list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"list", component: ListComponent},
  {path:"create", component: CreateComponent},
  { path:"", redirectTo: "list", pathMatch: "full" },
  { path:"**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
