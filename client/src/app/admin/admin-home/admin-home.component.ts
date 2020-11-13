import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { PollData } from "src/app/model/poll-data.model";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-admin-home",
  templateUrl: "./admin-home.component.html",
  styleUrls: ["./admin-home.component.css"],
})
export class AdminHomeComponent implements OnInit, OnDestroy {
  private pollDataSub: Subscription;
  private pollTriggerListenerSub: Subscription;
  private adminStatusListenerSub: Subscription;

  public isLoading = false;
  public pollData: PollData;
  constructor(private router: Router, private adminService: AdminService) {}
  ngOnDestroy(): void {
    this.pollDataSub.unsubscribe();
    this.pollTriggerListenerSub.unsubscribe();
    this.adminStatusListenerSub.unsubscribe();
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.adminService.getPollData();
    this.pollDataSub = this.adminService
      .getPollDataListener()
      .subscribe((pollData) => {
        this.isLoading = false;
        this.pollData = pollData;
      });

    this.pollTriggerListenerSub = this.adminService
      .getpollTriggerListenner()
      .subscribe((isTriggered) => {
        this.isLoading = false;
      });

    this.adminStatusListenerSub = this.adminService
      .getAdminStatusListenner()
      .subscribe((isPassed) => {
        this.isLoading = isPassed;
      });
  }

  onViewAllMembers() {
    this.router.navigateByUrl("/admin/veiw-all-members");
  }

  onEnableFirstPoll() {
    this.isLoading = true;
    this.adminService.enableFirstPoll(this.pollData);
  }

  onDisableFirstPoll() {
    this.isLoading = true;
    this.adminService.disableFirstPoll(this.pollData);
  }

  onEnableSecondPoll() {
    this.isLoading = true;
    this.adminService.enableSecondPoll(this.pollData);
  }

  onDisableSecondPoll() {
    this.isLoading = true;
    this.adminService.disableSecondPoll(this.pollData);
  }

  onFirstPollResult() {
    this.router.navigateByUrl("admin/view-poll-result/1");
  }

  onSecondPollResult() {
    this.router.navigateByUrl("admin/view-poll-result/2");
  }
}
