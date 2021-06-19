import { ShoppingItem } from './../models/ShoppingItem';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-shoppiing-list',
  templateUrl: './show-shoppiing-list.component.html',
  styleUrls: ['./show-shoppiing-list.component.scss'],
})
export class ShowShoppiingListComponent implements OnInit {
  @Input() myShoppingItems: ShoppingItem[];
  @Output() myDeletedList = new EventEmitter<ShoppingItem[]>();

  doneFlag = false;

  constructor() {}

  ngOnInit(): void {}

  onDoneClicked() {
    this.doneFlag = true;
  }

  onEditClicked() {}

  onDeleteList() {
    // this.myShoppingItems = [];
    this.myDeletedList.emit([]);
  }
}
