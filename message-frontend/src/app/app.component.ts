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
    console.log('AppComponent initialized');
  }

  // constructor(private templateService: TemplateService){} // this kills the page

  // ngOnInit(): void {
  //   console.log('AppComponent : ngOnInit method called');
  //   this.fetchTemplateOwnerNames();
  // }


  /**
   * Method is used to fetch all template owner names
   */
  // fetchTemplateOwnerNames(): void {
  //   console.log('AppComponent : fetchTemplateOwnerNames method called');
  //   this.templateService.getAllCmTemplateOwnerNames(); 
  // }

}
