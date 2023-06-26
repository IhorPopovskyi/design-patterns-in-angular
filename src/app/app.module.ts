import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterOneComponent } from './singleton/counter-one.component';
import { CounterTwoComponent } from './singleton/counter-two.component';
import { EventOneComponent } from './observer/event-one.component';
import { EventTwoComponent } from './observer/event-two.component';
import { UserComponent } from "./builder/user.component";
import { DecoratorComponent } from "./decorator/decorator.component";
import { FormsModule } from "@angular/forms";
import { FacadeComponent } from "./facade/facade.component";
import { FactoryComponent } from "./factory/factory.component";
import { ProductFactory } from "./factory/product.factory";

@NgModule({
  declarations: [
    AppComponent,
    CounterOneComponent,
    CounterTwoComponent,
    EventOneComponent,
    EventTwoComponent,
    UserComponent,
    DecoratorComponent,
    FacadeComponent,
    FactoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
