import { Component, OnInit } from '@angular/core';
import { Displpage } from '../../interfaces/displpage';
import { DisplpageService } from '../../services/displpage.service';

@Component({
  selector: 'app-displpage',
  templateUrl: './displpage.component.html',
  styleUrl: './displpage.component.css'
})
export class DisplpageComponent {

  templateName: string='';
  displpage: Displpage | undefined;

  constructor(private displpageService: DisplpageService) { 
    console.log('SampledataComponent initialized');
  }


  ngOnInit(): void {

  }

  onSampledataTemplateNameSelect(): void {
    if (this.templateName) {
      this.getDisplaypageByCmTemplateName(this.templateName); 
    }
  }



  getDisplaypageByCmTemplateName(cmTemplateName: string): void {
    this.displpageService.getDisplaypageByCmTemplateName(cmTemplateName)
      .subscribe({
        next: (displpage: Displpage) => {
          console.log('Sampledata by template name:', displpage);
          this.displpage = displpage; 
        },
        error: (error) => {
          console.error('Error fetching displpage by template name:', error);
        }
      });
  }


}
