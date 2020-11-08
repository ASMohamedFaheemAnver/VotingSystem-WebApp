import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PollResult } from "src/app/model/poll-result.model";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-view-results",
  templateUrl: "./view-results.component.html",
  styleUrls: ["./view-results.component.css"],
})
export class ViewResultsComponent implements OnInit {
  private pollResultsSub: Subscription;
  public pollResults: PollResult[];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getFirstPollResult();
    this.pollResultsSub = this.adminService
      .getpollResultsListenner()
      .subscribe((pollResults) => {
        pollResults = pollResults.map((pollResult) => {
          return {
            ...pollResult,
            eligible_member_infos: pollResult.eligible_member_infos.sort(
              function (x, y) {
                if (x.vote_recieved > y.vote_recieved) return -1;
                if (x.vote_recieved < y.vote_recieved) return 1;
                return 0;
              }
            ),
          };
        });
        this.pollResults = pollResults;
      });
  }
}
