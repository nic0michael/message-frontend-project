import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../services/template.service';
import { Template } from '../../interfaces/template';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']   
  // styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit {

  constructor(private templateService: TemplateService) { 
    // console.log('TemplateComponent initialized');
  }

  templates: Template[] = []; 
  templateOwnerNames: string[] = [];
  selectedTemplateOwner: string = '';
  templateNames: string[] = [];
  cmTemplateOwnerName: string='';
  
  

  
  ngOnInit(): void {
    this.fetchTemplateOwnerNames(); 
    this.fetchTemplates();
    
    template: this.getTemplateByCmTemplateName('exampleTemplateName');

    // this.deleteTemplateByCmTemplateName('exampleTemplateName');


    // this.createTemplate({ 
    //   id:-1,
    //   creationDate: '2024-03-25 10:00:00.000000',
    //   changedBy: 'Nico', 
    //   cmTemplateName: 'IBM_BlackFriday2024',
    //   cmTemplateCategory: 'Category1',
    //   cmTemplateContent: 'Template Content',
    //   cmCampaignName: 'Campaign1',
    //   cmTemplateOwnerName: 'IBM'
    // });
  

    // this.updateTemplate({ 
    //   id: 1,       
    //   creationDate: '2024-03-25 10:00:00.000000',
    //   changedBy: 'Nico', 
    //   cmTemplateName: 'DELL_BlackFriday2024',
    //   cmTemplateCategory: 'Category2',
    //   cmTemplateContent: 'Template Content',
    //   cmCampaignName: 'Campaign2',
    //   cmTemplateOwnerName: 'DELL'
    // });    

    
  }



  onOwnerTemplateNameSelect(): void {
    if (this.cmTemplateOwnerName) {
      this.fetchAllTemplateNamesByTemplateOwner(this.cmTemplateOwnerName); // Call the new method
    }
  }

  onOwnerTemplateSelect(): void {
    if (this.cmTemplateOwnerName) {
      this.getAllTemplatesByTemplateOwner(this.cmTemplateOwnerName); // Call the new method
    }
  }

  saveTemplate(template: Template): void {
    // this.templateService.createTemplate(template)
    //   .subscribe({
    //     next: (createdTemplate: Template) => {
    //       console.log('Template created successfully:', createdTemplate);
    //     },
    //     error: (error) => {
    //       console.error('Error creating template:', error);
    //     }
    //   });
  }

  /**  
   * Method to fetch templates by template owner name
   * 
   */
  fetchTemplates(): void {
    this.templateService.getAllTemplatesByTemplateOwner(this.cmTemplateOwnerName)
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
   * Method to fetch templates by template owner name
   * 
   */
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


  fetchAllTemplateNamesByTemplateOwner(cmTemplateOwnerName: string): void {
    this.templateService.getAllTemplatesNamesByTemplateOwner(cmTemplateOwnerName)
      .subscribe({
        next: (templateNames: string[]) => {
          this.templateNames = templateNames;
          console.log('All templateNames:', this.templateNames);
        },
        error: (error) => {
          console.error('Error fetching templates:', error);
        }
      });
      
  }

  getAllTemplateNamesByTemplateOwner(): void {
    this.templateService.getAllTemplatesNamesByTemplateOwner(this.cmTemplateOwnerName)
      .subscribe({
        next: (templateNames: string[]) => {
          this.templateNames = templateNames;
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
