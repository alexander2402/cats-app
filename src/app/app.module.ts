import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FactListComponent } from './fact-list/fact-list.component';
import { DetailsListComponent } from './details-list/details-list.component';
import { DetailsItemComponent } from './details-list/list-item/details-item.component';
import { ListItemComponent } from './fact-list/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FactListComponent,
    DetailsListComponent,
    DetailsItemComponent,
    ListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent],
  entryComponents: [DetailsItemComponent,ListItemComponent]
})
export class AppModule {

}
