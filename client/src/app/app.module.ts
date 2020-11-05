import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./angular-material.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { MemberLoginComponent } from './auth/member-login/member-login.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MemberLoginComponent,
    AdminLoginComponent,
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
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  entryComponents: [

  ],
})
export class AppModule {}
