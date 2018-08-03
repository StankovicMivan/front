import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Klub } from '../models/klub.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class KlubService {

  constructor(private http:HttpClient) {}

  private klubUrl = 'http://localhost:8082/api/klubovi';
 

  public getKlubovi() {
    return this.http.get<Klub[]>(this.klubUrl);
  }

  public deleteKlub(klub) {
    return this.http.delete(this.klubUrl + "/"+ klub.id);
  }

  public createKlub(klub) {
    return this.http.post<Klub>(this.klubUrl, klub);
  }

}
