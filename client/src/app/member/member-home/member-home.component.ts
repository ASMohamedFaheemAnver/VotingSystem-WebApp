import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MemberService } from "../member.service";
import { Position } from "../../model/position.model";
import { MatDialog } from "@angular/material/dialog";
import { SelectPersonDialogComponent } from "../select-person-dialog/select-person-dialog.component";
import { MemberVoteData } from "src/app/model/member-vote-data.model";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-member-home",
  templateUrl: "./member-home.component.html",
  styleUrls: ["./member-home.component.css"],
})
export class MemberHomeComponent implements OnInit, OnDestroy {
  constructor(
    private memberService: MemberService,
    private selectPersonDialog: MatDialog
  ) {}
  private positionsSub: Subscription;
  private createVoteSub: Subscription;
  private memberVoteDataSub: Subscription;
  public positions: Position[] = [];
  public memberVoteData: MemberVoteData;
  public isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.positionsSub = this.memberService
      .getPositionsListener()
      .subscribe((positions) => {
        this.isLoading = false;
        this.positions = positions;
      });
    this.memberVoteDataSub = this.memberService
      .getMemberVoteDataListener()
      .subscribe((memberVoteData) => {
        this.isLoading = false;
        this.memberVoteData = memberVoteData;
        if (!this.memberVoteData.is_voted) {
          this.isLoading = true;
          this.memberService.getAllPositions();
        }
      });
    this.memberService.getMemberVoteData();
    this.createVoteSub = this.memberService
      .getCreateVoteListenner()
      .subscribe((isCreated) => {
        this.isLoading = false;
        this.memberVoteData.is_voted = isCreated;
      });
  }

  ngOnDestroy(): void {
    this.positionsSub.unsubscribe();
    this.createVoteSub.unsubscribe();
    this.memberVoteDataSub.unsubscribe();
  }

  onSelectPerson(position: Position) {
    const selectPersonDialogRef = this.selectPersonDialog.open(
      SelectPersonDialogComponent,
      { data: position, /*disableClose: true,*/ maxWidth: "90vw" }
    );

    selectPersonDialogRef.afterClosed().subscribe((member) => {
      console.log({ memberHomeSelectedMember: member, position: position });
      // position = { ...position, to: member };
      this.positions = this.positions.map((pPosition) => {
        if (pPosition === position) {
          return { ...position, to: member };
        }
        return pPosition;
      });
    });
  }

  onCreateVotes() {
    this.isLoading = true;
    this.memberService.createVotes(this.positions);
  }
}
