import { ShoppingItem } from './models/ShoppingItem';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  shoppingItems: ShoppingItem[] = [];

  onEnterItem(enteredItem: ShoppingItem) {
    this.shoppingItems.push({
      itemName: enteredItem.itemName,
      quantity: enteredItem.quantity,
    });
  }

  onListDeleted(emptyList: ShoppingItem[]) {
    this.shoppingItems = emptyList;
  }
}
