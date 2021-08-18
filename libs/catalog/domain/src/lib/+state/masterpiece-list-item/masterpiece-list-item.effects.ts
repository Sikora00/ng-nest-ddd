import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as MasterpieceListItemActions from './masterpiece-list-item.actions';
import { MasterpieceListItemDataService } from '../../infrastructure/masterpiece-list-item.data.service';

@Injectable()
export class MasterpieceListItemEffects {
  loadMasterpieceListItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MasterpieceListItemActions.loadMasterpieceListItem),
      switchMap((action) =>
        this.masterpieceListItemDataService.load().pipe(
          map((masterpieceListItem) =>
            MasterpieceListItemActions.loadMasterpieceListItemSuccess({
              masterpieceListItem,
            })
          ),
          catchError((error) =>
            of(
              MasterpieceListItemActions.loadMasterpieceListItemFailure({
                error,
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private masterpieceListItemDataService: MasterpieceListItemDataService
  ) {}
}
