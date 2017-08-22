

// Core components
import { Injectable }   from '@angular/core';
import { Http, Response, Headers, RequestOptions}  from '@angular/http';
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
    

   
    constructor(private http: Http) { }

    public addObjects(signaleur){
        //pas de cle d'api
        //const url = `${this.baseUrl}objects?apiKey=${this.apiKey}`;
         const url = `${this.baseUrl}${this.source}/`;

         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         let body = JSON.stringify(signaleur);
        // return this.http.post(url, body, options ).map((res: Response) => res.json());
        this.http.post(url, body, options );
        return body;
    
        
       // return this.http.put(url, body, options ).map((res: Response) => res.json());


       
     
         // decommenter ci-dessous pour post avec recuperation de reponse
         /*this.http.post(this.aggloPauDomaine+this.postApi, JSON.stringify(infoSignaleur), {headers: headers})
           .map(res => res.json())
             .subscribe(data => {
                console.log(data);
             });*/
    }






}