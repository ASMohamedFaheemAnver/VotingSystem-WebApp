import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-member-login",
  templateUrl: "./member-login.component.html",
  styleUrls: ["./member-login.component.css"],
})
export class MemberLoginComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthService, private router: Router) {}
  ngOnDestroy(): void {
    this.authStatusListenerSub.unsubscribe();
  }
  public hide = true;
  private isAuth = false;
  private userCategory;
  public isLoading = false;
  private authStatusListenerSub: Subscription;

  ngOnInit(): void {
    this.isAuth = this.authService.isUserAuth();
    this.userCategory = this.authService.getUserCategory();
    if (this.isAuth && this.userCategory === "developer") {
      this.router.navigateByUrl("/admin/admin-home");
    } else if (this.isAuth && this.userCategory === "member") {
      this.router.navigateByUrl("/member/member-home");
    }

    this.authStatusListenerSub = this.authService
      .getAuthStatusListener()
      .subscribe((isAuth) => {
        this.isLoading = isAuth;
      });
  }

  onMemberLogin(secret) {
    this.isLoading = true;
    this.authService.loginMember(secret);
  }
}
