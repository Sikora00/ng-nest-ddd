import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromMasterpieceListItem from '../+state/masterpiece-list-item/masterpiece-list-item.reducer';
import * as MasterpieceListItemSelectors from '../+state/masterpiece-list-item/masterpiece-list-item.selectors';

@Injectable({ providedIn: 'root' })
export class ListFacade {
  loaded$ = this.store.pipe(
    select(MasterpieceListItemSelectors.getMasterpieceListItemLoaded)
  );
  masterpieceListItemList$ = this.store.pipe(
    select(MasterpieceListItemSelectors.getAllMasterpieceListItem)
  );
  selectedMasterpieceListItem$ = this.store.pipe(
    select(MasterpieceListItemSelectors.getSelected)
  );

  constructor(
    private store: Store<fromMasterpieceListItem.MasterpieceListItemPartialState>
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
