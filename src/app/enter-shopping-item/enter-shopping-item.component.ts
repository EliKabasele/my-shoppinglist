import { ShoppingItem } from './../models/ShoppingItem';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enter-shopping-item',
  templateUrl: './enter-shopping-item.component.html',
  styleUrls: ['./enter-shopping-item.component.scss'],
})
export class EnterShoppingItemComponent implements OnInit {
  newItemName = '';
  newItemQuantity = '';

  @Output() enteredItem = new EventEmitter<ShoppingItem>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    this.enteredItem.emit({
      itemName: this.newItemName,
      quantity: this.newItemQuantity,
    });
  }

  onClearItem() {
    this.newItemName = '';
    this.newItemQuantity = '';
  }
}
