import { Component, OnInit } from "@angular/core";
import { MemberService } from "../member.service";

@Component({
  selector: "app-member-home",
  templateUrl: "./member-home.component.html",
  styleUrls: ["./member-home.component.css"],
})
export class MemberHomeComponent implements OnInit {
  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.memberService.getAllPositions();
  }
}
