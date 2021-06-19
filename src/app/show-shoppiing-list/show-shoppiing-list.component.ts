import { ShoppingItem } from './../models/ShoppingItem';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-shoppiing-list',
  templateUrl: './show-shoppiing-list.component.html',
  styleUrls: ['./show-shoppiing-list.component.scss'],
})
export class ShowShoppiingListComponent implements OnInit {
  @Input() myShoppingItems: ShoppingItem[];

  doneFlag = false;

  constructor() {}

  ngOnInit(): void {}

  onDoneClicked() {
    this.doneFlag = true;
  }

  onEditClicked() {}
}
