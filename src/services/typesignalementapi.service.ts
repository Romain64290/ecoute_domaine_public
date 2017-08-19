/*
* Un exemple d'implmentation d'un service au sein d'angular
*/

// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

// Models
import{TypeSignalementApiGlobal} from '../models/typesignalementapi-global.model';


@Injectable()
export class TypeSignalementService {

    private baseUrl: string = 'https://efapau1.agglo-pau.fr/api/';
    private source:string ='type_signalement';
   //pas de cle d'api
   // private apiKey: string = '<API_KEY>';
    
    constructor(private http: Http) { }

    public getObjects(): Promise<TypeSignalementApiGlobal> {
        //pas de cle d'api
        //const url = `${this.baseUrl}objects?apiKey=${this.apiKey}`;
         const url = `${this.baseUrl}${this.source}/`;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

}