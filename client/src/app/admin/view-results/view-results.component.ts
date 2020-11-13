import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { PollResult } from "src/app/model/poll-result.model";
import { Position } from "src/app/model/position.model";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-view-results",
  templateUrl: "./view-results.component.html",
  styleUrls: ["./view-results.component.css"],
})
export class ViewResultsComponent implements OnInit, OnDestroy {
  private pollResultsSub: Subscription;
  private adminStatusListenerSub: Subscription;
  public pollResults: PollResult[];
  public pollCount: number;
  public isLoading = false;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {}
  ngOnDestroy(): void {
    this.pollResultsSub.unsubscribe();
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.pollResultsSub = this.adminService
      .getpollResultsListenner()
      .subscribe((pollResults) => {
        this.isLoading = false;
        console.log({ viewResultsComponent: pollResults });
        pollResults = pollResults.map((pollResult) => {
          return {
            ...pollResult,
            eligible_member_infos: pollResult.eligible_member_infos
              .slice()
              .sort(function (x, y) {
                if (x.vote_recieved > y.vote_recieved) return -1;
                if (x.vote_recieved < y.vote_recieved) return 1;
                return 0;
              }),
          };
        });
        this.pollResults = pollResults;
      });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("pollCount")) {
        this.pollCount = parseInt(paramMap.get("pollCount"));
        console.log({ viewPollResultRouteParam: this.pollCount });
        this.adminService.getPollResult(this.pollCount);
      }
    });

    this.adminStatusListenerSub = this.adminService
      .getAdminStatusListenner()
      .subscribe((isPassed) => {
        this.isLoading = isPassed;
      });
  }

  onMakeEligible(_id: string, position: Position) {
    console.log({ onMakeEligible: { _id: _id, position: position } });
    this.adminService.makeAMemberEligible(_id, position);
  }

  onMakeAMemberNotEligible(_id: string, position: Position) {
    console.log({
      onMakeAMemberNotEligible: { _id: _id, position: position },
    });
    this.adminService.makeAMemberNotEligible(_id, position);
  }

  IsIndexExist(eligible_for: Position[], position: string) {
    return eligible_for.some((pPosition) => {
      return pPosition._id === position;
    });
  }
}
