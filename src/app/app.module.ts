import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component'
import { FormsModule } from '@angular/forms';
import { HttpReqService } from './http.service'
import { HeaderService } from './services/header.service'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    // HttpModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [HttpReqService, HeaderService],
  bootstrap: [AppComponent],
  entryComponents: [DialogBoxComponent]
})
export class AppModule { }
