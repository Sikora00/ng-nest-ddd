import { createAction, props } from '@ngrx/store';
import { MasterpieceListItem } from '../../entities/masterpiece-list-item';

export const loadMasterpieceListItem = createAction(
  '[MasterpieceListItem] Load MasterpieceListItem'
);

export const loadMasterpieceListItemSuccess = createAction(
  '[MasterpieceListItem] Load MasterpieceListItem Success',
  props<{ masterpieceListItem: MasterpieceListItem[] }>()
);

export const loadMasterpieceListItemFailure = createAction(
  '[MasterpieceListItem] Load MasterpieceListItem Failure',
  props<{ error: any }>()
);
