import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpReqService } from '../../http.service';
import { HeaderService } from '../../services/header.service';
import { UserModel } from './user.model'
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogBoxComponent } from "../../dialog-box/dialog-box.component";
import { } from "@angular/core";
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  password1;
  password2;
  passwordMatch;
  userData: UserModel
  constructor(private httpService: HttpReqService, private headerService: HeaderService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.headerService.setheader('Register');
  }
  onSubmit(form: NgForm) {
    // console.log("submited", form.value)
    this.httpService.logData(form.value);
    let { name, email, number, password1 } = form.value;
    this.userData = new UserModel(name, number, email, password1);
    console.log(this.userData);


    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.autoFocus = true;
    // dialogConfig.data = {
    //   id: 1,
    //   title: 'Angular For Beginners'
    // };

    this.httpService.postData(this.userData, "http://localhost:3000/login/register")
      .subscribe(res => {
        console.log(res);
        let data = res;
        const dialogRef = this.dialog.open(DialogBoxComponent, { data: data.user });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed', result);
          this.router.navigate(['/login']);
        });
      },
        err => { console.log("res in error", err); }
      );
  };
  matchPassword() {
    console.log(this.password1, this.password2);
    if (this.password1 != this.password2) {
      this.passwordMatch = "password should be same";
    } else {
      this.passwordMatch = "";
    }

  }

}
