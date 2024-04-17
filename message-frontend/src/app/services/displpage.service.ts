import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Displpage } from '../interfaces/displpage';

@Injectable({
  providedIn: 'root'
})
export class DisplpageService {

  constructor(private http: HttpClient) { }
  /**
   * this calls : http://localhost:8080/message-api/enriched/{cmTemplateName}
   * 
   * @param cmTemplateName 
   * @returns 
   */
  getDisplaypageByCmTemplateName(cmTemplateName: string): Observable<Displpage> {
    return this.http.get<Displpage>(`http://localhost:8080/message-api/enriched/${cmTemplateName}`);
  }
}
