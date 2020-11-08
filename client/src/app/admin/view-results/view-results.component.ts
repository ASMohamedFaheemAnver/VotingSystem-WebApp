import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { PollResult } from "src/app/model/poll-result.model";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-view-results",
  templateUrl: "./view-results.component.html",
  styleUrls: ["./view-results.component.css"],
})
export class ViewResultsComponent implements OnInit, OnDestroy {
  private pollResultsSub: Subscription;
  public pollResults: PollResult[];
  public pollCount: number;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.pollResultsSub.unsubscribe();
  }

  ngOnInit(): void {
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

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("pollCount")) {
        this.pollCount = parseInt(paramMap.get("pollCount"));
        console.log({ viewPollResultRouteParam: this.pollCount });
        this.adminService.getFirstPollResult(this.pollCount);
      }
    });
  }

  onMakeEligible(_id: string) {
    this.adminService.makeAMemberEligible(_id);
  }
}
