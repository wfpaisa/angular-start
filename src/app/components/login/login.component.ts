import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, TrackByFunction } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

// export class LoginComponent implements OnInit {
export class LoginComponent implements OnChanges, OnInit, OnDestroy {
  name: string = '';
  ciudades: string[] = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'];

  model = {
    name: '',
  };

  constructor() {}

  ngOnInit(): void {
    console.log('Login Init');
  }

  ngOnDestroy(): void {
    console.log('Login Destroy');
  }

  onSave(e: Event) {
    e.preventDefault();
    this.ciudades.push(this.name);
    this.name = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change');
  }

  ciudadsel(key: number) {
    console.log('ciudad id', key);
  }
}
