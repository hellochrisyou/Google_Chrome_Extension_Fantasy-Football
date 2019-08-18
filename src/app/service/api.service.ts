import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Injectable, ErrorHandler } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerGlobal } from '../error-handler/error-handler';

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

  // httpGetAll(url: string | null): Observable<League[]> {
  //   return this.http.get<any[]>(url, httpOptions).pipe(catchError(this.handleError));
  // }

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
