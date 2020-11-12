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
  public isLoading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Position,
    private memberService: MemberService
  ) {}
  ngOnDestroy(): void {
    this.membersByPositionSub.unsubscribe();
  }
  ngOnInit(): void {
    this.isLoading = true;
    console.log({ selectPersonDialogComponentData: this.data });
    this.memberService.getAllMembersByPosition(this.data["_id"]);
    this.membersByPositionSub = this.memberService
      .getMembersByPositionListener()
      .subscribe((membersByPosition) => {
        this.isLoading = false;
        this.membersByPosition = membersByPosition;
        console.log({
          selectPersonDialogComponentMembersByPosition: this.membersByPosition,
        });
      });
  }

  onSelectMember(member: Member) {
    console.log({ selectedMember: member, position: this.data });
  }
}
