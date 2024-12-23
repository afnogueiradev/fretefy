import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regiao } from '../../Regiao';

@Injectable({
  providedIn: 'root'
})
export class ListRegiaoService {

  private apiUrl = 'http://localhost:3000/regioes';

  constructor(private http: HttpClient) { }

  getRegioes() : Observable<Regiao[]>{
    return this.http.get<Regiao[]>(this.apiUrl);
  }
  
  deleteRegiao(regiao: Regiao): Observable<Regiao> {
    return this.http.delete<Regiao>(`${this.apiUrl}/${regiao.id}`);
  }

  updateRegiao(regiao: Regiao): Observable<Regiao> {
    return this.http.put<Regiao>(`${this.apiUrl}/${regiao.id}`, regiao);
  }

  addRegiao(regiao: Regiao): Observable<Regiao> {
    return this.http.post<Regiao>(`${this.apiUrl}`, regiao)
  }
}


