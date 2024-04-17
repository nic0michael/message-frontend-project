import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sampledata } from '../interfaces/sampledata';

@Injectable({
  providedIn: 'root'
})
export class SampledataService {

  constructor(private http: HttpClient) { }


  /**
   * this calls : http://localhost:8080/message-api/sampledata/listall/{cmTemplateOwnerName}
   * 
   * @param cmTemplateOwnerName 
   * @returns 
   */
  getAllSampledataByTemplateOwner(cmTemplateOwnerName: string): Observable<Sampledata[]> {
    return this.http.get<Sampledata[]>(`http://localhost:8080/message-api/sampledata/listall/${cmTemplateOwnerName}`)
  }


  /**
   * this calls : localhost:8080/message-api/sampledata/{cmTemplateName}
   * 
   * @param cmTemplateName 
   * @returns 
   */
  getSampledataByCmTemplateName(cmTemplateName: string): Observable<Sampledata> {
    return this.http.get<Sampledata>(`localhost:8080/message-api/sampledata/${cmTemplateName}`);
  }


  /**
   * this calls : http://localhost:8080/message-api/sampledata/{cmTemplateName}
   * 
   * @param cmTemplateName 
   */
  deleteSampledataByCmTemplateName(cmTemplateName: string): Observable<Sampledata> { 
    return this.http.delete<Sampledata>(`http://localhost:8080/message-api/sampledata/${cmTemplateName}`);
  }

/**
   * this calls : http://localhost:8080/message-api/sampledata with POST
   * 
   * @param Sampledata 
   * @param sampledata 
   */
createSampledata(sampledata: Sampledata): Observable<Sampledata> {
  return this.http.post<Sampledata>('http://localhost:8080/message-api/sampledata', sampledata);
}

/**
 * this calls : http://localhost:8080/message-api/sampledata with put
 * 
 * @param sampledata 
 */
updateSampledata(sampledata: Sampledata): Observable<Sampledata> {
  return this.http.put<Sampledata>(`http://localhost:8080/message-api/sampledata`, sampledata);
}



}
