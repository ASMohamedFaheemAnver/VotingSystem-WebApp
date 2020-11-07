import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MemberService } from "../member.service";
import { Position } from "../../model/position.model";
import { MatDialog } from "@angular/material/dialog";
import { SelectPersonDialogComponent } from "../select-person-dialog/select-person-dialog.component";

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
  public positions: Position[] = [];

  ngOnInit(): void {
    this.memberService.getAllPositions();
    this.positionsSub = this.memberService
      .getPositionsListener()
      .subscribe((positions) => {
        this.positions = positions;
      });
  }

  ngOnDestroy(): void {
    this.positionsSub.unsubscribe();
  }

  onSelectPerson(position: Position) {
    const selectPersonDialogRef = this.selectPersonDialog.open(
      SelectPersonDialogComponent,
      { data: position, /*disableClose: true,*/ maxWidth: "90vw" }
    );
  }
}
