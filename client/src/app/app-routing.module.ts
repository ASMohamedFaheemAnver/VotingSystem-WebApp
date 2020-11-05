import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { MemberLoginComponent } from './auth/member-login/member-login.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/member-login",
    pathMatch: "full",
  },

  {
    path: "auth/member-login",
    component: MemberLoginComponent
  },
  
  {
    path: "auth/admin-login",
    component: AdminLoginComponent
  },
  {
    path: "**",
    redirectTo: "auth/member-login",
    pathMatch: "full",
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
