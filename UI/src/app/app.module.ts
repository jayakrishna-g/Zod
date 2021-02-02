import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent } from './core/shell/shell.component';
import { SideNavComponent } from './core/shell/side-nav/side-nav.component';
import { TopNavComponent } from './core/shell/top-nav/top-nav.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './core/login/login.component';
import { AuthenticationService } from './core/authentication/authentication.service';
import { PracticeComponent } from './modules/practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    SideNavComponent,
    TopNavComponent,
    LoginComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule.forRoot()
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
