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
    console.log('TemplateModule initialized');
  }
}
