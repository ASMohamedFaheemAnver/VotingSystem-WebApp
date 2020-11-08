import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-member-login",
  templateUrl: "./member-login.component.html",
  styleUrls: ["./member-login.component.css"],
})
export class MemberLoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  public hide = true;
  private isAuth = false;
  private userCategory;

  ngOnInit(): void {
    this.isAuth = this.authService.isUserAuth();
    this.userCategory = this.authService.getUserCategory();
    if (this.isAuth && this.userCategory === "admin") {
      this.router.navigateByUrl("/admin/admin-home");
    } else if (this.isAuth && this.userCategory === "member") {
      this.router.navigateByUrl("/member/member-home");
    }
  }

  onMemberLogin(secret) {
    this.authService.loginMember(secret);
  }
}
