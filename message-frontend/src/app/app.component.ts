import { Component } from '@angular/core';
// import { TemplateService } from './services/template.service';

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

}
