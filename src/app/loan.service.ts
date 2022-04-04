import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  apiKey = {
    'X-API-KEY': 'swb-222222',
    'Access-Control-Allow-Origin': '*'
  };
  headers = new HttpHeaders(this.apiKey);
  url = '/api';

  constructor(private http: HttpClient) { }

  submitLoanApplication(form: FormGroup): Observable<any> {
    return this.http.post(this.url, form.value, { headers: this.headers }).pipe(
      catchError(error => {
        this.handleFormErrors(error, form);
        return of(0);
      })
    )
  }

  private handleFormErrors(error: HttpErrorResponse, form: FormGroup): void {
    if (error.status === 504) {
      form.setErrors({ "non_field_errors": error.error })
    }

    if (error.status === 400) {
      let err = <{ params: string, message: string }[]>error.error.fields;
      err.forEach(field => {
        if (field) {
          form.get(field.params)?.setErrors({ [field.params]: [field.message] })
        }
      });
    }
  }
}