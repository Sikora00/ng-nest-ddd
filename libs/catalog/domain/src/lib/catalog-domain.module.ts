import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterpieceListItemEffects } from './+state/masterpiece-list-item/masterpiece-list-item.effects';
import * as fromMasterpieceListItem from './+state/masterpiece-list-item/masterpiece-list-item.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromMasterpieceListItem.MASTERPIECELISTITEM_FEATURE_KEY,
      fromMasterpieceListItem.reducer
    ),
    EffectsModule.forFeature([MasterpieceListItemEffects]),
  ],
})
export class CatalogDomainModule {}
