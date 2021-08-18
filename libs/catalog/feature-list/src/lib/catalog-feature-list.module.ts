import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogDomainModule } from '@sales-app/catalog/domain';
import { ListComponent } from './list.component';
import { CatalogListItemComponent } from './catalog-list-item/catalog-list-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [CommonModule, CatalogDomainModule, MatCardModule, MatGridListModule, MatGridListModule, MatGridListModule, CommonModule],
  declarations: [ListComponent, CatalogListItemComponent],
  exports: [ListComponent],
})
export class CatalogFeatureListModule {}
