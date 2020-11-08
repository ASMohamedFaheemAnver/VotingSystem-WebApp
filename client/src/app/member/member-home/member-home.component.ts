import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MemberService } from "../member.service";
import { Position } from "../../model/position.model";
import { MatDialog } from "@angular/material/dialog";
import { SelectPersonDialogComponent } from "../select-person-dialog/select-person-dialog.component";
import { MemberVoteData } from "src/app/model/member-vote-data.model";

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
  private memberVoteDataSub: Subscription;
  public positions: Position[] = [];
  public memberVoteData: MemberVoteData;

  ngOnInit(): void {
    this.memberService.getAllPositions();
    this.positionsSub = this.memberService
      .getPositionsListener()
      .subscribe((positions) => {
        this.positions = positions;
      });
    this.memberVoteDataSub = this.memberService
      .getMemberVoteDataListener()
      .subscribe((memberVoteData) => {
        this.memberVoteData = memberVoteData;
      });
    this.memberService.getMemberVoteData();
  }

  ngOnDestroy(): void {
    this.positionsSub.unsubscribe();
  }

  onSelectPerson(position: Position) {
    const selectPersonDialogRef = this.selectPersonDialog.open(
      SelectPersonDialogComponent,
      { data: position, /*disableClose: true,*/ maxWidth: "90vw" }
    );

    selectPersonDialogRef.afterClosed().subscribe((member) => {
      console.log({ memberHomeSelectedMember: member, position: position });
      position.to = member;
    });
  }

  onCreateVotes() {
    this.memberService.createVotes(this.positions);
  }
}
