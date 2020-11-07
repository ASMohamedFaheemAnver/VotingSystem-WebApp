import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { Member } from "src/app/model/member.model";
import { MemberService } from "../member.service";

@Component({
  templateUrl: "select-person-dialog.component.html",
  styleUrls: ["select-person-dialog.component.css"],
})
export class SelectPersonDialogComponent implements OnInit, OnDestroy {
  public membersByPosition: Member[] = [];
  private membersByPositionSub: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Position,
    private memberService: MemberService
  ) {}
  ngOnDestroy(): void {
    this.membersByPositionSub.unsubscribe();
  }
  ngOnInit(): void {
    console.log({ selectPersonDialogComponentData: this.data });
    this.memberService.getAllMembersByPosition(this.data["_id"]);
    this.membersByPositionSub = this.memberService
      .getMembersByPositionListener()
      .subscribe((membersByPosition) => {
        this.membersByPosition = membersByPosition;
        console.log({
          selectPersonDialogComponentMembersByPosition: this.membersByPosition,
        });
      });
  }
}
