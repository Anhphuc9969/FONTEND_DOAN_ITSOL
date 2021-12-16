import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { job } from '../models/job';
import { catchError, from, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {  }

  public getJob(): Observable<job[]>{
    return this.http.get<any>( `${this.apiServerUrl}/job/job`).pipe(
      tap(receivedJob=> console.log( `receivedJob=${JSON.stringify(receivedJob)}`))
    );
  }
}
