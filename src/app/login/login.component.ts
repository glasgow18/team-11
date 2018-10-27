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
  	this.goStaffMain();
  	}
  	else if (name == 'kid'){
  	this.goFunWelcome();
  	}
  	else {
  		alert('BYYEEE you are not authorized!!')
  	}
  }

  goNews(): void {
  	this.location.go('news');
  	window.location.reload();
  }

  goStaffMain(): void {
  	this.location.go('staffMain');
  	window.location.reload();
  }

  goFunWelcome(): void {
  	this.location.go('funKid');
  	window.location.reload();
  }

}

