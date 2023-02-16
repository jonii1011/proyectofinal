import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = environment.URL + 'personas/';
  
  constructor(private httpclient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpclient.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpclient.get<persona>(this.URL + `detail/${id}`);
  }

  public update(id: number, Persona: persona): Observable<any>{
    return this.httpclient.put<any>(this.URL + `update/${id}`, Persona);
  }

}