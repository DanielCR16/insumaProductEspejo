import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './modules/base/base.component';

const routes: Routes = [
  {
    path:"supplying",
    component:BaseComponent,
    children: [

      {
        path: "product",
        loadChildren: () => import("./modules/body/body.module").then((m) => m.BodyModule),
      },

      { path: "", redirectTo: "product", pathMatch: "full" },
      { path: "**", redirectTo: "product", pathMatch: "full" },
    ],

  },
  { path: "**", redirectTo: "supplying", pathMatch: "full" },
];

@NgModule({
  imports: [    RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
