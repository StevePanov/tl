import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import { InfoComponent } from './info/info.component';
// import { EventService } from './sevices/event.service';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EventsComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
