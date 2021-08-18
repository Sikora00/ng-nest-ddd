import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightBoxDomainModule } from '@sales-app/light-box/domain';
import { AddToLightBoxButtonComponent } from './add-to-light-box-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, LightBoxDomainModule, MatButtonModule],
  declarations: [AddToLightBoxButtonComponent],
  exports: [AddToLightBoxButtonComponent],
})
export class LightBoxFeatureAddToLightBoxButtonModule {}
