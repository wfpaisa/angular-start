import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
// export class ButtonComponent implements OnInit {
export class ButtonComponent {
  @Input() color: string = '';
  @Input() text: string = '';
  @Output() btnClick = new EventEmitter();

  constructor() {}

  // ngOnInit(): void {}

  onClick(text: string) {
    this.btnClick.emit(text);
  }
}
