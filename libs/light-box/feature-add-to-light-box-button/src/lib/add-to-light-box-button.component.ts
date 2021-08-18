import { Component, Input, OnInit } from '@angular/core';
import { AddToLightBoxButtonFacade } from '@sales-app/light-box/domain';

@Component({
  selector: 'light-box-add-to-light-box-button',
  templateUrl: './add-to-light-box-button.component.html',
  styleUrls: ['./add-to-light-box-button.component.scss'],
})
export class AddToLightBoxButtonComponent implements OnInit {
  @Input()
  id!: number;

  constructor(private addToLightBoxButtonFacade: AddToLightBoxButtonFacade) {}

  ngOnInit() {}

  onAddToLightBox(): void {
    this.addToLightBoxButtonFacade.addToLightBox(this.id)
  }
}
