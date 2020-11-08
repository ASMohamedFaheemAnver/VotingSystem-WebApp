import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { PollResult } from "src/app/model/poll-result.model";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-admin-home",
  templateUrl: "./admin-home.component.html",
  styleUrls: ["./admin-home.component.css"],
})
export class AdminHomeComponent implements OnInit {
  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {}

  onViewAllMembers() {
    this.router.navigateByUrl("/admin/veiw-all-members");
  }

  onEnableFirstPoll() {
    this.adminService.enableFirstPoll();
  }

  onDisableFirstPoll() {
    this.adminService.disableFirstPoll();
  }

  onEnableSecondPoll() {
    this.adminService.enableSecondPoll();
  }

  onDisableSecondPoll() {
    this.adminService.disableSecondPoll();
  }

  onFirstPollResult() {
    this.router.navigateByUrl("admin/view-poll-result/1");
  }

  onSecondPollResult() {
    this.router.navigateByUrl("admin/view-poll-result/2");
  }
}
