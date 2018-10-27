import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-account',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  private location: Location) {
  }

  ngOnInit() {
  }

  isParent(name:string): void {
  	if (name == 'parent'){
  	this.goNews()
  	}
  	else if (name == 'staff'){
  	this.goChat();
  	}
  	else {
  	this.goFun();
  	}
  }

  goNews(): void {
  	this.location.go('news');
  	window.location.reload();
  }

  goChat(): void {
  	this.location.go('news');
  	window.location.reload();
  }

  goFun(): void {
  	this.location.go('news');
  	window.location.reload();
  }

}

