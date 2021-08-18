import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AddToLightBoxButtonFacade {
  constructor(private http: HttpClient) {
  }

  addToLightBox(id: number) {
    // call to http
  }
}
