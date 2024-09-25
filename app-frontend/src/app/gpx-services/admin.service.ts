import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { api_AdminAddEmpleado, api_AdminGetEmpleados } from '../gpx-data/gpx-api';
import { AddEmpleado, Empleado } from '../gpx-data/admin.data';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router) { }

  addEmpleado(form: AddEmpleado): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    let url = api_AdminAddEmpleado;
    return this.http.post<any>(url, form,{headers:headers});
  }

  getEmpleados(): Observable<Empleado[]> {
    
    let url = api_AdminGetEmpleados;
    return this.http.get<Empleado[]>(url);
  }

}
