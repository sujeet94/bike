import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    const user = localStorage.getItem('userData');
    console.log(`user ${user}`);
    // if (!user) this.router.navigate(['login']);
  }

}
