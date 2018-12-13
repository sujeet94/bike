import { Component, OnInit } from '@angular/core';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Dashboard';
  constructor(private headerService: HeaderService) { }


  ngOnInit() {
    this.headerService.titleUpdate.subscribe((title: string) => {
      this.title = title;
    })
  }
}
