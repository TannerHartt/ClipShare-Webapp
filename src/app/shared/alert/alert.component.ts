import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: []
})
export class AlertComponent implements OnInit {

  @Input() bColor: string = 'bg-blue-500'; // Default background color
  @Input() color: string = 'blue'; // Default text color

  constructor() { }

  ngOnInit(): void {
  }

  get bgColor() {
    return `bg-${this.color}-400`;
  }

}
