import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogFeatureListModule } from '@sales-app/catalog/feature-list';
import { RouterModule } from '@angular/router';
import { LightBoxFeatureAddToLightBoxButtonModule } from '@sales-app/light-box/feature-add-to-light-box-button';

@NgModule({
  declarations: [CatalogListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CatalogListComponent,
      },
    ]),
    CatalogFeatureListModule,
    LightBoxFeatureAddToLightBoxButtonModule,
  ],
})
export class CatalogModule {}
