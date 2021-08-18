import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MASTERPIECELISTITEM_FEATURE_KEY,
  State,
  MasterpieceListItemPartialState,
  masterpieceListItemAdapter,
} from './masterpiece-list-item.reducer';

// Lookup the 'MasterpieceListItem' feature state managed by NgRx
export const getMasterpieceListItemState = createFeatureSelector<
  MasterpieceListItemPartialState,
  State
>(MASTERPIECELISTITEM_FEATURE_KEY);

const { selectAll, selectEntities } = masterpieceListItemAdapter.getSelectors();

export const getMasterpieceListItemLoaded = createSelector(
  getMasterpieceListItemState,
  (state: State) => state.loaded
);

export const getMasterpieceListItemError = createSelector(
  getMasterpieceListItemState,
  (state: State) => state.error
);

export const getAllMasterpieceListItem = createSelector(
  getMasterpieceListItemState,
  (state: State) => selectAll(state)
);

export const getMasterpieceListItemEntities = createSelector(
  getMasterpieceListItemState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getMasterpieceListItemState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getMasterpieceListItemEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
