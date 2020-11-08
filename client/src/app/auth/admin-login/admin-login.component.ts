import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"],
})
export class AdminLoginComponent implements OnInit {
  form: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}
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
    this.form = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)],
      }),
    });
  }

  onLoginDeveloper() {
    console.log({ adminLoginFormData: this.form.value });
    this.authService.loginDeveloper({
      ...this.form.value,
    });
  }
}
