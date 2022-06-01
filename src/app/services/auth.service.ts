import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

const departments = ['Administración', 'Contabilidad', 'Recursos Humanos', 'Ventas'];

@Injectable({
  providedIn: 'root',
})
export class AuthService implements Resolve<any> {
  resolve(): Observable<any> {
    return of(departments);
  }
}
