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

  isHighlight = false;
  fontSize = 24;

  constructor() { }

  ngOnInit(): void {
  }

  search($event) {
    console.log(this.keyword);
    this.isHighlight = !this.isHighlight;
    this.fontSize = this.fontSize + 2;
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
