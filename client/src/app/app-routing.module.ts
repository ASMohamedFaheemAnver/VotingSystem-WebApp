import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminHomeComponent } from "./admin/admin-home/admin-home.component";
import { ViewMembersComponent } from "./admin/view-members/view-members.component";
import { AdminLoginComponent } from "./auth/admin-login/admin-login.component";
import { AuthGuard } from "./auth/auth.guard";
import { MemberLoginComponent } from "./auth/member-login/member-login.component";
import { MemberHomeComponent } from "./member/member-home/member-home.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/member-login",
    pathMatch: "full",
  },

  {
    path: "auth/member-login",
    component: MemberLoginComponent,
  },

  {
    path: "auth/admin-login",
    component: AdminLoginComponent,
  },
  {
    path: "admin/admin-home",
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin/veiw-all-members",
    component: ViewMembersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "member/member-home",
    component: MemberHomeComponent,
    canActivate: [AuthGuard],
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
  providers: [AuthGuard],
})
export class AppRoutingModule {}
