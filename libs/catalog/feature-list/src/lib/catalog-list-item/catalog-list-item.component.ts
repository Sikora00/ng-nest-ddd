import { Component, Input, OnInit } from '@angular/core';
import { MasterpieceListItem } from '@sales-app/catalog/domain';

@Component({
  selector: 'catalog-catalog-list-item',
  templateUrl: './catalog-list-item.component.html',
  styleUrls: ['./catalog-list-item.component.scss'],
})
export class CatalogListItemComponent implements OnInit {
  @Input()
  item!: MasterpieceListItem
  constructor() {}

  ngOnInit(): void {}
}
