import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private elementRef:ElementRef,private router:Router) 
  { }

  ngAfterViewInit()
  {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fdbe00';
  }

  ngOnInit() {
  }

  Login(data:any)
  {
    this.router.navigate(["/app-dashboard"]);
  }

  

}
