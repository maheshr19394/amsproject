import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private router :Router) { }

  ngOnInit() {
  }
  toggled = false;
  slideOpen: any = false;

  onToggle(){
    
  }
    changeSlide(): void {
      this.toggled = !this.toggled;
      this.slideOpen = !this.slideOpen;
  }
 close(){
  localStorage.clear();
  this.router.navigate(['/login']);
 }
}
