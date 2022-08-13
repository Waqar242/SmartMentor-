import { Component, OnInit } from '@angular/core';
import { Items } from '../Items';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  list:Items[] = []; 
  vis1: boolean = false;
  vis2: boolean = false;
  vis3: boolean = false;
  toggle1: boolean = true;
  toggle2: boolean = true;
  toggle3: boolean = true;

  constructor() { }

  ngOnInit(): void {
    let Object = {
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/768px-Google_Calendar_icon_%282020%29.svg.png",
      "title": "Google Calendar",
      "subTitle": "Manage your meetings throught your google calendar, seemlessly",
      "status": false
    }
    this.list.push(Object)
  }
  public fun1() {
    this.vis1 = !this.vis1;
    this.toggle1 = !this.toggle1;
  }
  public fun2() {
    this.vis2 = !this.vis2;
    this.toggle2 = !this.toggle2;
  }
  public fun3() {
    this.vis3 = !this.vis3;
    this.toggle3 = !this.toggle3;
  }
}
