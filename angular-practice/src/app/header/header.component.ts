import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mouseCounter: number;
  counter: number;
  timer;
  keyword = '';

  constructor() { }

  ngOnInit(): void {
  }

  search($event) {
    console.log(this.keyword);

    // if (!this.mouseCounter) {
    //   this.resetStatus();
    // }
    // this.mouseCounter += 1;
  }

  resetStatus() {
    this.mouseCounter = 0;
    this.counter = 30;

    this.timeElapse();
  }

  timeElapse() {
    this.timer = setTimeout(() => {
      if (this.counter >= 1) {
        this.counter -= 1;
        this.timeElapse();
      } else {
        clearTimeout(this.timer);
      }
    }, 1000);
  }
}
