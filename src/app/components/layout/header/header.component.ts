import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() color: string | null = null;

  title = 'MyApp';

  constructor() {}

  ngOnInit(): void {
    console.log('load');
  }

  toggleAddtask(params: string) {
    console.log('click togle', params);
  }
}
