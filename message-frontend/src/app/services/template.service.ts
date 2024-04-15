import { Injectable } from '@angular/core';
import { Template } from '../interfaces/template';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http: HttpClient) {
    console.log('TemplateService initialized');
   }

  // templates: Template[] = []; 
  
  /**
   * this calls : localhost:8080/message-api/templates/listCmTemplateNames/{cmTemplateOwnerName}
   * 
   * @param cmTemplateOwnerName 
   * @returns 
   */
  getAllTemplatesByTemplateOwner(cmTemplateOwnerName: string): Observable<Template[]> {
    return this.http.get<Template[]>(`http://localhost:8080/message-api/templates/listCmTemplateNames/${cmTemplateOwnerName}`);
  }

   /**
    * this calls : localhost:8080/message-api/templates/cmTemplateOwnerNames
    */
  getAllCmTemplateOwnerNames(): Observable<string[]> {
    console.log('TemplateService : fetchTemplateOwnerNames method called');
    return this.http.get<string[]>('http://localhost:8080/message-api/templates/cmTemplateOwnerNames');
  }

  /**
   * this calls : localhost:8080/message-api/templates/{cmTemplateName}
   * 
   * @param cmTemplateName 
   * @returns 
   */
  getTemplateByCmTemplateName(cmTemplateName: string): Observable<Template> {
    return this.http.get<Template>(`http://localhost:8080/message-api/templates/${cmTemplateName}`);
  }


  /**
   * this calls : localhost:8080/message-api/templates/{cmTemplateName}
   * 
   * @param cmTemplateName 
   */
  deleteTemplateByCmTemplateName(cmTemplateName: string): Observable<Template> { 
    return this.http.delete<Template>(`http://localhost:8080/message-api/templates/${cmTemplateName}`);
  }

  /**
   * this calls : localhost:8080/message-api/templates with POST
   * 
   * @param Template 
   * @param template 
   */
  createTemplate(template: Template): Observable<Template> {
    return this.http.post<Template>('http://localhost:8080/message-api/templates', template);
  }

  /**
   * this calls : localhost:8080/message-api/templates
   * 
   * @param template 
   */
  updateTemplate(template: Template): Observable<Template> {
    return this.http.put<Template>(`http://localhost:8080/message-api/templates`, template);
  }

}
