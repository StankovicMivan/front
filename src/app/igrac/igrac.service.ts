import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Igrac } from '../models/igrac.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IgracService {

  constructor(private http:HttpClient) {}

  private igracUrl = 'http://localhost:8082/api/igraci';
 

  public getIgraci() {
    
    return this.http.get<Igrac[]>(this.igracUrl);
  }
  
  public getIgrac(id) {
    return this.http.get<Igrac>(this.igracUrl + "/" +id);
  }
  public editIgrac(izmenjen) {
    return this.http.put<Igrac>(this.igracUrl + "/" +izmenjen.id, izmenjen);
  }

  public deleteIgrac(igrac) {
    return this.http.delete(this.igracUrl + "/"+ igrac.id);
  }

  public createIgrac(noviIgrac) {
    return this.http.post<Igrac>(this.igracUrl, noviIgrac);
  }

}
