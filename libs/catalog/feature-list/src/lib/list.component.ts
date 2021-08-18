import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { ListFacade, loadMasterpieceListItem } from '@sales-app/catalog/domain';

@Component({
  selector: 'catalog-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ContentChild('actions', { static: false })
  actionsTemplateRef!: TemplateRef<any>;

  masterpieceListItemList$ = this.listFacade.masterpieceListItemList$;

  constructor(private listFacade: ListFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.listFacade.dispatch(loadMasterpieceListItem());
  }
}
