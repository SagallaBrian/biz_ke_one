import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TestapiService {
  private userdataurl: string = 'http://127.0.0.1:8000/users_api/users/';

  constructor(private http: HttpClient) {}

  getdatafromurl(): Observable<any[]> {
    return this.http.get<any[]>(this.userdataurl);
  }
}
