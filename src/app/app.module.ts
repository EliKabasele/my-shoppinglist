import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterShoppingItemComponent } from './enter-shopping-item/enter-shopping-item.component';
import { ShowShoppiingListComponent } from './show-shoppiing-list/show-shoppiing-list.component';
import { EditShoppingItemComponent } from './edit-shopping-item/edit-shopping-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterShoppingItemComponent,
    ShowShoppiingListComponent,
    EditShoppingItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
