import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnChanges {
  @Input() ciudad?: string;
  @Input() key: number = 0;
  @Output() ciudadsel = new EventEmitter<number>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambia la ciudad');
  }

  // ngOnInit(): void {}

  select(key: number) {
    //
    this.ciudadsel.emit(key);
  }

  onSearch(): void {
    console.log('search');
  }
}
