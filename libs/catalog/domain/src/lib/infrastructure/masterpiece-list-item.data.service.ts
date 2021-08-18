import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MasterpieceListItem } from '../entities/masterpiece-list-item';

@Injectable({ providedIn: 'root' })
export class MasterpieceListItemDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<MasterpieceListItem[]> {
    return of([
      { id: 1, image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', available: true, price: 120 },
      { id: 2, image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', available: false, price: 0.5 },
      { id: 3, image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', available: false, price: 10 },
      { id: 4, image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', available: false, price: 23 },
      { id: 5, image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', available: false, price: 12.23 },
      { id: 6, image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', available: true, price: 20 },
    ]);
  }
}
