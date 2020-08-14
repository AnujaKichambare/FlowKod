import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngAfterViewInit()
  {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fdbe00';
  }

  ngOnInit() {
  }

}
