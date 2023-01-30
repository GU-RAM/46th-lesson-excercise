import { NgModule, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { CalculateAgePipe } from './calculate-age.pipe';
import { TaskOneComponent } from './task-one/task-one.component';
import { UserNamePape } from './userNames.pipe';
import { TaskTwoComponent } from './task-two/task-two.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskOneComponent,
    HighlightDirective,
    CalculateAgePipe,
    UserNamePape,
    TaskTwoComponent,
  ],
  imports: [BrowserModule],
  providers: [AppService, { provide: ElementRef, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
