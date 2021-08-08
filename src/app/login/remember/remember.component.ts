import { isDefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.component.html',
  styleUrls: ['./remember.component.css']
})
export class RememberComponent implements OnInit {

  constructor() { }
  toggleButtonName = "Hide Button";
  isDisplay = true;
  ngOnInit(): void {
  }

  toggleRemember(flag: boolean) {

    this.isDisplay = !flag;

    if (!flag) {
      this.toggleButtonName = "Hide Button";
      $(".remember-item").show();
    } else {
      this.toggleButtonName = "Show Button";
      $(".remember-item").hide();
    }

    
  }
}
