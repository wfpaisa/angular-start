import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

// export class LoginComponent implements OnInit {
export class LoginComponent {
  nombre: string = 'hola';

  constructor() {}

  // ngOnInit(): void {}

  onSave(e: Event) {
    e.preventDefault();
    this.nombre = 'guardaous';
  }
}
