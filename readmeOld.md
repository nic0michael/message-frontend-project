## This project is built with Angular 17
[https://angular.io/docs](https://angular.io/docs) \
[https://angular.io/tutorial/first-app/first-app-lesson-01](https://angular.io/tutorial/first-app/first-app-lesson-01) \
[https://start.spring.io/](https://start.spring.io/) \
[https://quarkus.io/get-started/](https://quarkus.io/get-started/) \
[https://getbootstrap.com/](https://getbootstrap.com/) \
[https://www.udemy.com/course/fullstack-development-with-angular17-springboot3-bootstrap5/learn/](https://www.udemy.com/course/fullstack-development-with-angular17-springboot3-bootstrap5/learn/)

## Creating app with modules

run this command (with no-standalone flag)

```
ng new message-frontend --routing --no-standalone
# Choose No for server side rendering

cd message-frontend

code .
```

Run this command (To install dependencies and add to package.json)

```
npm i bootstrap sweetalert2 axios --save
```

## Project structure

1. **src**  is source code
2. **angular.json** is for all items regarding Angular configuration    (standalone : false)
3. **build** specifies files used to build this
4. **package.json** for scripts and dependencies
5. **tsconfig.json** is related to typescript
6. **tsconfig.spec.json** is for testing

### src

main.html loads the main.ts file
main.ts (gets loaded into the browser)  it loads the AppModule it loads the app-route
<app-route> in the index.html
So the code in the app.component gets added to the index.html

## Adding Bootstrap CSS

in styles.css add this:

```
@import "~bootstrap/dist/css/bootstrap.css";
// OR BETTER : 
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
```

Adding bootstrap to html
edit app.component.htlm add this :

```
<h2 class="text-primary">Hello World</h2>
```

Start the server

```
ng serve
```

Open in browser:
[http://localhost:4200](http://localhost:4200)

## Generate Environment Files

run this command:

```
ng generate environments
```

in environment.development.ts put this code

```
export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080'
};
```

In the main.ts file we need to add configurations

```
import axios from 'axios';
import {environment} from './environments/environment.development';
```

## Generating Components

Run these commands :

```
ng generate component templ/templ-edit-comp --no-standalone
ng generate component sampl/sampl-data-comp --no-standalone
ng generate component mesg/mesg-disp-comp --no-standalone
```

## Generating Services
Run these commands :
```
ng generate service templ/templ-edit-svc
ng generate service sampl/sampl-data-svc
ng generate service mesg/mesg-disp-svc
```

## Generating Interfaces
Run these commands :
```
ng generate interface templ/templ-edit-iface
ng generate interface sampl/sampl-data-iface
ng generate interface mesg/mesg-disp-iface
```

In templ-edit-iface.ts put this code (inside the TemplEditIface method )
```
    _id: number;
    creationDate: string;
    changedBy: string;
    cmTemplateName: string;
    cmTemplateCategory: string;
    cmTemplateContent: string;
    cmCampaignName: string;
    cmTemplateOwnerName: string;
```



In sampl-data-iface.ts put this code (inside the SamplDataIface method )
```
    _id: number;
    creationDate: string;
    changedBy: string;
    cmTemplateName: string;
    cmMapPayloadJson: string;
    cmDataContent: string;
```

In mesg-disp-iface.ts put this code (inside the MesgDispIface method )
```
    _id: number;
    creationDate: string;
    cmTemplateName: string;
    cmMapPayloadJson: string;
    cmTemplateContent: string;
    cmDataContent: string;
```

## Edit the services

edit templ-edit-svc.service.ts add this code
```
import axios from 'axios';
import  {TemplEditIface} from './templ-edit-iface';
```

edit sampl-data-svc.service.tsadd this code
```
import axios from 'axios';
import  {SamplDataIface} from './sampl-data-iface';
```


edit mesg-disp-svc.service.ts add this code
```
import axios from 'axios';
import  {MesgDispIface} from './mesg-disp-iface';
```

## Creating CRUD
in the templ-edit-svc.service.ts add the following methods :   
(under the constructor)
```
  getAllTemplates(): Promise<any>{
    return axios.get('/message-api/templates/');
  }

  getTemplate(id: number): Promise<any>{
    return axios.get('/message-api/templates/');
  }

  

  createTemplate(request: any): Promise<any>{
    let reqData = {
        creationDate: request.creationDate,
        changedBy: request.changedBy,,
        cmTemplateName: request.cmTemplateName,
        cmTemplateCategory: request.cmTemplateCategory,
        cmTemplateContent: request.cmTemplateContent,
        cmCampaignName: request.cmCampaignName,
        cmTemplateOwnerName: request.cmTemplateOwnerName

    }
    return axios.post('/message-api/templates/',reqData);
  }

  updateTemplate(request: any): Promise<any>{
    let reqData = {
        creationDate: request.creationDate,
        changedBy: request.changedBy,,
        cmTemplateName: request.cmTemplateName,
        cmTemplateCategory: request.cmTemplateCategory,
        cmTemplateContent: request.cmTemplateContent,
        cmCampaignName: request.cmCampaignName,
        cmTemplateOwnerName: request.cmTemplateOwnerName

    }
    return axios.put('/message-api/templates/',reqData);
  }

  deleteTemplate(id: number): Promise<any>{
    return axios.delete('/message-api/templates/');
  }

```

## Generating Modules

Run these commands :

```
ng generate module templ-edit-mdl --routing
ng generate module sampl-data-mdl --routing
ng generate module mesg-disp-mdl --routing
```

Edit templ-edit-mdl.module.ts
put this in the file:
```
  declarations: [
    TemplEditCompComponent <--
  ],
```
also put this in the file:
```  
  imports: [
    CommonModule,
    TemplEditMdlRoutingModule,
    FormsModule,        <--
    ReactiveFormsModule <--
  ]
```

## Routing
in Angular we handle navigation by using Routing

Edit file: mesg-disp-mdl-routing.module.ts
Add routes: to const routes: Routes
```
const routes: Routes = [
  path:'',redirectTo:'templates/overview',pathMatch: 'full'),
  path:'templates/overview',component:OverviewComponent),
  path:'templates/:id/details',component: DetailComponent),
  path:'templates/create',component: CreateComponent),
  path:'templates/:id/edit',component: EditComponent),
];
```


## Registering our components in the AppModule
Edit file :app.module.ts  
in declerations section remove these
```
    EditCompComponent,
    DataCompComponent,
    ResultCompComponent,
    SamplDataSvcComponent,
    HtmlDispSvcComponent,
    TmplDataSvcComponent,
    TemplEditCompComponent,
    SamplDataCompComponent,
    TemplDispCompComponent,
    MesgDispCompComponent
```
Also remove these:
```

import { EditCompComponent } from './comp/edit-comp/edit-comp.component';
import { DataCompComponent } from './comp/data-comp/data-comp.component';
import { ResultCompComponent } from './comp/result-comp/result-comp.component';
import { SamplDataSvcComponent } from './comp/sampl-data-svc/sampl-data-svc.component';
import { HtmlDispSvcComponent } from './comp/html-disp-svc/html-disp-svc.component';
import { TmplDataSvcComponent } from './comp/tmpl-data-svc/tmpl-data-svc.component';
import { TemplEditCompComponent } from './comp/templ-edit-comp/templ-edit-comp.component';
import { SamplDataCompComponent } from './comp/sampl-data-comp/sampl-data-comp.component';
import { TemplDispCompComponent } from './comp/templ-disp-comp/templ-disp-comp.component';
import { MesgDispCompComponent } from './comp/mesg-disp-comp/mesg-disp-comp.component';

```
 We dont need to register them here.
 They are registered in TemplateEditModule : templ-edit-mdl.module.ts
 
 in the imports section add TemplEditMdlModule
 ```
  imports: [
    CommonModule,
    TemplEditMdlRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TemplEditMdlModule <--
  ]
 ```
 
## Change app.component.html
Clear out file and put this in file
```
<div class="container">
	<router-outlet></router-outlet>
</div>
```
test by running server
```
ng serve
```
 
Edit file templ-edit-comp.component.ts
Make class implement OnInit
```
import { Component, OnInit } from '@angular/core';
import TemplEditIface from '../templ-edit-iface';

@Component({
  selector: 'app-templ-edit-comp',
  templateUrl: './templ-edit-comp.component.html',
  styleUrl: './templ-edit-comp.component.css'
})
export class TemplEditCompComponent implements OnInit{
  TemplEditIfaces : TemplEditIface[] =[]; 

}
```
 
 
We should have :
```
import { Component, OnInit } from '@angular/core';
import TemplEditIface from '../templ-edit-iface';
import { TemplEditSvcService } from '../templ-edit-svc.service';

@Component({
  selector: 'app-templ-edit-comp',
  templateUrl: './templ-edit-comp.component.html',
  styleUrl: './templ-edit-comp.component.css'
})
export class TemplEditCompComponent implements OnInit{
  TemplEditIfaces : TemplEditIface[] =[]; 

  constructor(public templEditSvcService : TemplEditSvcService ){}

  ngOnInit(): void {
    this.getAllTemplates()
  }

  getAllTemplates(){
    this.templEditSvcService.getAllTemplates()
    .then((response )=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

}
``` 

## Styling The REST results
Edit file templ-edit-comp.component.html

 Angular looping in a table
```
<div class="card-body">
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr *ng<for="let template of templates">
                <th>{{template.title}}</th>
                <th>{{template.description}}</th>
                <th>{{template.action}}</th>
            </tr>
        </tbody>
    </table>
</div>
```