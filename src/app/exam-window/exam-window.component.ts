import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exam-window',
  templateUrl: './exam-window.component.html',
  styleUrls: ['./exam-window.component.css']
})
export class ExamWindowComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngAfterViewInit()
  {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }

  ngOnInit() {
  }

}
