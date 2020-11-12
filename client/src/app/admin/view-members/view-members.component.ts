import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-view-members",
  templateUrl: "./view-members.component.html",
  styleUrls: ["./view-members.component.css"],
})
export class ViewMembersComponent implements OnInit, OnDestroy {
  private membersSub: Subscription;
  constructor(private adminService: AdminService) {}
  ngOnDestroy(): void {
    this.membersSub.unsubscribe();
  }
  public members;
  public isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.adminService.getAllMembers();
    this.membersSub = this.adminService
      .getMembersListener()
      .subscribe((members) => {
        this.isLoading = false;
        this.members = members;
        console.log({ seperatedMembersFromViewMembers: this.members });
      });
  }
}
