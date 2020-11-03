import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ErrorComponent } from "./error/error.component";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog) {}
  message = "UNKNOWN!";
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // console.log(error);
        // alert(error.error.errors[0].message);
        if (error.error.errors[0].message) {
          this.message = error.error.errors[0].message;
        }
        this.dialog.open(ErrorComponent, {
          data: { message: this.message },
          disableClose: true,
        });
        return throwError(error);
      })
    );
  }
}
