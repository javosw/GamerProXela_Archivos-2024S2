import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { api_AdminAddEmpleado, api_AdminGetEmpleados } from '../gpx-data/gpx-api';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router) { }

  addEmpleado(form: AbstractControl): Observable<any> {
    let url = api_AdminAddEmpleado;
    return this.http.post<any>(url, form);
  }

  getEmpleados(): Observable<any> {
    let url = api_AdminGetEmpleados;
    return this.http.get<any>(url);
  }

}
