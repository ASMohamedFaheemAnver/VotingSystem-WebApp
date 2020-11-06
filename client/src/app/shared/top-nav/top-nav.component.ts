import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.css"],
})
export class TopNavComponent implements OnInit, OnDestroy {
  public homeUrl = "auth/member-login";
  private userCategorySub: Subscription;
  private userAuthSub: Subscription;
  constructor(private authService: AuthService) {}
  public userCategory: string;
  public isAuth = false;

  ngOnDestroy(): void {
    this.userCategorySub.unsubscribe();
    this.userAuthSub.unsubscribe();
  }

  ngOnInit(): void {
    this.userCategory = this.authService.getUserCategory();
    this.isAuth = this.authService.isUserAuth();
    this.userCategorySub = this.authService
      .getUserCategoryStatusListener()
      .subscribe((userCategory) => {
        this.userCategory = userCategory;
        console.log({ topNavUserCategory: this.userCategory });

        if (this.userCategory === "developer") {
          this.homeUrl = "admin/admin-home";
        } else {
          this.homeUrl = "auth/member-login";
        }
      });
    if (this.userCategory === "developer") {
      this.homeUrl = "admin/admin-home";
    } else {
      this.homeUrl = "auth/member-login";
    }

    this.userAuthSub = this.authService
      .getAuthStatusListener()
      .subscribe((isAuth) => {
        this.isAuth = isAuth;
      });
  }

  onLogout() {
    this.authService.logOutUser();
  }
}
