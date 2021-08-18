import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as MasterpieceListItemActions from './masterpiece-list-item.actions';
import { MasterpieceListItem } from '../../entities/masterpiece-list-item';

export const MASTERPIECELISTITEM_FEATURE_KEY = 'masterpieceListItem';

export interface State extends EntityState<MasterpieceListItem> {
  selectedId?: string | number; // which MasterpieceListItem record has been selected
  loaded: boolean; // has the MasterpieceListItem list been loaded
  error?: string | null; // last known error (if any)
}

export interface MasterpieceListItemPartialState {
  readonly [MASTERPIECELISTITEM_FEATURE_KEY]: State;
}

export const masterpieceListItemAdapter: EntityAdapter<MasterpieceListItem> =
  createEntityAdapter<MasterpieceListItem>();

export const initialState: State = masterpieceListItemAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const masterpieceListItemReducer = createReducer(
  initialState,
  on(MasterpieceListItemActions.loadMasterpieceListItem, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    MasterpieceListItemActions.loadMasterpieceListItemSuccess,
    (state, { masterpieceListItem }) =>
      masterpieceListItemAdapter.upsertMany(masterpieceListItem, {
        ...state,
        loaded: true,
      })
  ),
  on(
    MasterpieceListItemActions.loadMasterpieceListItemFailure,
    (state, { error }) => ({ ...state, error })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return masterpieceListItemReducer(state, action);
}
