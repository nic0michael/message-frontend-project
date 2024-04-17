import { Component, OnInit } from '@angular/core';
import { SampledataService } from '../../services/sampledata.service';
import { Sampledata } from '../../interfaces/sampledata';

@Component({
  selector: 'app-sampledata',
  templateUrl: './sampledata.component.html',
  styleUrl: './sampledata.component.css'
})
export class SampledataComponent {


  cmTemplateOwnerName: string='';
  templateName: string='';
  sampledataArray: Sampledata[] = []; 
  sampledata: Sampledata | undefined;


  constructor(private sampledataService: SampledataService) { 
    console.log('SampledataComponent initialized');
  }


  ngOnInit(): void {

  }

  onSampledataTemplateNameSelect(): void {
    if (this.templateName) {
      this.getSampledataByCmTemplateName(this.templateName);  
    }
  }


  onSampledataTemplateOwnerNameSelect(): void {
    if (this.cmTemplateOwnerName) {
      this.getAllSampledataByTemplateOwner(this.cmTemplateOwnerName);  
    }
  }


  getAllSampledataByTemplateOwner(cmTemplateOwnerName: string): void {
    console.log('getAllSampledataByTemplateOwner called');
    this.sampledataService.getAllSampledataByTemplateOwner(cmTemplateOwnerName)
    .subscribe({
      next: (sampledataArray: Sampledata[]) => {
        this.sampledataArray = sampledataArray;
        console.log('All sampledataArray:', this.sampledataArray);
      },
      error: (error) => {
        console.error('Error fetching sampledataArray:', error);
      }
    });
  }



  getSampledataByCmTemplateName(cmTemplateName: string): void {
    console.log('getSampledataByCmTemplateName called');
    this.sampledataService.getSampledataByCmTemplateName(cmTemplateName)
      .subscribe({
        next: (sampledata: Sampledata) => {
          console.log('Sampledata by template name:', sampledata);
          this.sampledata = sampledata; 
        },
        error: (error) => {
          console.error('Error fetching sampledata by template name:', error);
        }
      });
  }


  deleteSampledataByCmTemplateName(cmTemplateName: string): void {
    this.sampledataService.deleteSampledataByCmTemplateName(cmTemplateName)
    .subscribe({
      next: () => {
        console.log('Sampledata deleted successfully');
        this.sampledataArray  = []; 
      },
      error: (error) => {
        console.error('Error deleting sampledata:', error);
      }
    });
  }


  createSampledata(sampledata: Sampledata): void {
    this.sampledataService.createSampledata( sampledata)
    .subscribe({
      next: (createdSampledata: Sampledata) => {
        console.log('Sampledata created successfully:', createdSampledata);
        this.sampledata  = createdSampledata;
      },
      error: (error) => {
        console.error('Error creating sampledata:', error);
      }
    });
  }
  
  
  updateSampledata(sampledata: Sampledata): void {
    this.sampledataService.updateSampledata( sampledata)
    .subscribe({
      next: (updatedSampledata: Sampledata) => {
        console.log('Sampledata updated successfully:', updatedSampledata);
        this.sampledata  = updatedSampledata;
      },
      error: (error) => {
        console.error('Error updating sampledata:', error);
      }
    });
  }


}
