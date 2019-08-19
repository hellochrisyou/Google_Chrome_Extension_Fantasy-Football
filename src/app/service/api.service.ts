import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Injectable, ErrorHandler } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  bodyParam = {};
  constructor(private http: HttpClient) { }

  extractData(res: Response) {
    const body = res;
    return body || {};
  }


  httpGet(url: string): Observable<any> {
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData)
    );
  }

  httpPost(url: string, bodyParam): Observable<any> {
    return this.http.post(url, bodyParam, httpOptions).pipe(
      map(this.extractData)
    );
  }

  httpPut(url: string, bodyParam): Observable<any> {
    return this.http.put(url, bodyParam, httpOptions).pipe(
      map(this.extractData)
    );
  }
}
