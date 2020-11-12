import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./angular-material.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { TopNavComponent } from "./shared/top-nav/top-nav.component";
import { MemberLoginComponent } from "./auth/member-login/member-login.component";
import { AdminLoginComponent } from "./auth/admin-login/admin-login.component";
import { ErrorInterceptor } from "./error-interceptor";
import { ErrorComponent } from "./error/error.component";
import { AdminHomeComponent } from "./admin/admin-home/admin-home.component";
import { MemberHomeComponent } from "./member/member-home/member-home.component";
import { ViewMembersComponent } from "./admin/view-members/view-members.component";
import { SelectPersonDialogComponent } from "./member/select-person-dialog/select-person-dialog.component";
import { ViewResultsComponent } from "./admin/view-results/view-results.component";
import { GraphQLModule } from "./graphql.module";

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MemberLoginComponent,
    AdminLoginComponent,
    ErrorComponent,
    AdminHomeComponent,
    MemberHomeComponent,
    ViewMembersComponent,
    SelectPersonDialogComponent,
    ViewResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    GraphQLModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [SelectPersonDialogComponent],
})
export class AppModule {}
