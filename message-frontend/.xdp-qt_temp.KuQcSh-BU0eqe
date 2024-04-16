**This is the recipe for this angular project**

## 1. Creating app with modules

I ran the following command (with no-standalone flag)
```
ng new message-frontend --routing --no-standalone
```
## 2. Creating the needed classes
I ran the following commands :

```
ng generate interface interfaces/template
ng generate service services/template
ng generate component components/template --no-standalone
ng generate module modules/template --routing
```

## 3. Template interface has this code :  template.ts :
```
export interface Template {
id: number,
creationDate: string,
cmTemplateName: string,
cmTemplateCategory: string,
cmTemplateContent: string,
cmCampaignName: string,
cmTemplateOwnerName:string,
changedBy: string
}
```

## 4. Template service has this code : template.service :
```
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
```

## 5. template component has this code: template.component.ts :
```
import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../services/template.service';
// import { TemplateService } from './template.service';
import { Template } from '../../interfaces/template';

@Component({
selector: 'app-template',
templateUrl: './template.component.html',
styleUrls: ['./template.component.css']
// styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit {

constructor(private templateService: TemplateService) {
console.log('TemplateComponent initialized');
}

templates: Template[] = [];
templateOwnerNames: string[] = [];

ngOnInit(): void {

this.fetchTemplates('DELL');
this.fetchTemplateOwnerNames();

template: this.getTemplateByCmTemplateName('exampleTemplateName');
this.deleteTemplateByCmTemplateName('exampleTemplateName');

this.createTemplate({ 
  id:-1,
  creationDate: '2024-03-25 10:00:00.000000',
  changedBy: 'Nico', 
  cmTemplateName: 'IBM_BlackFriday2024',
  cmTemplateCategory: 'Category1',
  cmTemplateContent: 'Template Content',
  cmCampaignName: 'Campaign1',
  cmTemplateOwnerName: 'IBM'
});


this.updateTemplate({ 
  id: 1,     
  creationDate: '2024-03-25 10:00:00.000000',
  changedBy: 'Nico', 
  cmTemplateName: 'DELL_BlackFriday2024',
  cmTemplateCategory: 'Category2',
  cmTemplateContent: 'Template Content',
  cmCampaignName: 'Campaign2',
  cmTemplateOwnerName: 'DELL'
});  
}

/**

* Method to fetch templates by template owner name
*

*/
fetchTemplates(cmTemplateOwnerName: string): void {
this.templateService.getAllTemplatesByTemplateOwner(cmTemplateOwnerName)
.subscribe({
next: (templates: Template[]) => {
this.templates = templates;
console.log('All templates:', this.templates);
},
error: (error) => {
console.error('Error fetching templates:', error);
}
});
}

/**

* Method to fetch all template owner names
  */
  fetchTemplateOwnerNames(): void {
  this.templateService.getAllCmTemplateOwnerNames()
  .subscribe({
  next: (ownerNames: string[]) => {
  this.templateOwnerNames = ownerNames;
  console.log('All template owner names:', this.templateOwnerNames);
  },
  error: (error) => {
  console.error('Error fetching template owner names:', error);
  }
  });
  }

getAllTemplatesByTemplateOwner(cmTemplateOwnerName: string): void {
this.templateService.getAllTemplatesByTemplateOwner(cmTemplateOwnerName)
.subscribe({
next: (templates: Template[]) => {
this.templates = templates;
console.log('All templates:', this.templates);
},
error: (error) => {
console.error('Error fetching templates:', error);
}
});

}

getAllCmTemplateOwnerNames(): void {
this.templateService.getAllCmTemplateOwnerNames()
.subscribe({
next: (ownerNames: string[]) => {
this.templateOwnerNames = ownerNames;
console.log('All template owner names:', this.templateOwnerNames);
},
error: (error) => {
console.error('Error fetching template owner names:', error);
}
});
}

getTemplateByCmTemplateName(cmTemplateName: string): void {
this.templateService.getTemplateByCmTemplateName(cmTemplateName)
.subscribe({
next: (template: Template) => {
console.log('Template by name:', template);
},
error: (error) => {
console.error('Error fetching template by name:', error);
}
});
}

deleteTemplateByCmTemplateName(cmTemplateName: string): void {
this.templateService.deleteTemplateByCmTemplateName(cmTemplateName)
.subscribe({
next: () => {
console.log('Template deleted successfully.');
},
error: (error) => {
console.error('Error deleting template:', error);
}
});
}

createTemplate(template: Template): void {
this.templateService.createTemplate(template)
.subscribe({
next: (createdTemplate: Template) => {
console.log('Template created successfully:', createdTemplate);
},
error: (error) => {
console.error('Error creating template:', error);
}
});
}

updateTemplate(template: Template): void {
this.templateService.updateTemplate(template)
.subscribe({
next: (updatedTemplate: Template) => {
console.log('Template updated successfully:', updatedTemplate);
},
error: (error) => {
console.error('Error updating template:', error);
}
});
}

}
```

## 6. Template component html has this code " template.component.html :
```
<!-- <p>template works!</p> -->
<!-- Display fetched template owner names -->

<div *ngIf="templateOwnerNames.length > 0">
  <table>
    <tr>
      <td>
        <h2>Template Owner Names:</h2>
      </td>
    </tr>
    <tr>
      <td>
        <table style="border-collapse: collapse; border: 1px solid black;" width="100%">
          <tr style="border-bottom: 3px solid black;">
            <td>
                <button (click)="fetchTemplateOwnerNames()">Fetch Template Owner Names</button>
            </td>
          </tr>
          <tr style="border-bottom: 3px solid black;">
            <td >
              <ul>
                <li *ngFor="let ownerName of templateOwnerNames">{{ ownerName }}</li>
              </ul>
            </td>
          </tr>
        </table>
      </td>
    </tr>    
  </table>
</div>

```

## 7. Template module : has this code : template.module.ts :
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateService } from '../../services/template.service';
import { TemplateComponent } from '../../components/template/template.component';


@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ],
  providers: [TemplateService]
})
export class TemplateModule { 
  constructor() {
    // console.log('TemplateModule initialized');
  }
}
```

## 8. app component : has this code : app.component.ts :
```
import { Component } from '@angular/core';
import { TemplateService } from './services/template.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'message-frontend';
  templateOwnerNames: string[] = []; 

  constructor(){
    // console.log('AppComponent initialized');
  }

}
```

## 9. app component html has this code : app.component.html :
Under these lines :

```
  <h1>Hello, {{ title }}</h1>
  <p>Congratulations! Your app is running. </p>
```
We added :
```
<!-- Other content can go here -->
<app-template></app-template>
```
