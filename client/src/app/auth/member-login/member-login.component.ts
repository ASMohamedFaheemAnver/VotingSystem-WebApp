import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-member-login",
  templateUrl: "./member-login.component.html",
  styleUrls: ["./member-login.component.css"],
})
export class MemberLoginComponent implements OnInit {
  constructor(private authService: AuthService) {}
  public hide = true;
  ngOnInit(): void {}

  onMemberLogin(secret) {
    this.authService.loginMember(secret);
  }
}
