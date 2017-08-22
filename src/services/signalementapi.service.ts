

// Core components
import { Injectable }   from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams}  from '@angular/http';
import {Observable} from "rxjs/Rx";



// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class SignalementService {

    private baseUrl: string = 'https://efapau1.agglo-pau.fr/api/';
    private source:string ='signalement';
   //pas de cle d'api
   // private apiKey: string = '<API_KEY>';
   headers: Headers;
   options: RequestOptions;

    

   
    constructor(private http: Http) { 
      this.headers = new Headers({ 'Content-Type': 'application/json', 
      'Accept': 'q=0.8;application/json;q=0.9' });
this.options = new RequestOptions({ headers: this.headers });

    }

    public addObjects(signaleur): Promise<any>{
      const url = `${this.baseUrl}${this.source}/`;

      let body = JSON.stringify(signaleur);
      return this.http
          .post(url, body, this.options)
          .toPromise()
          .then(this.extractData)
          .catch(this.handleError);
    }

    private extractData(res: Response) {
      let body = res.json();
      return body || {};
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }




}