import { NgModule, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CalculateAgePipe } from './pipes/calculate-age.pipe';
import { TaskOneComponent } from './task-one/task-one.component';
import { UserNamePape } from './pipes/userNames.pipe';
import { TaskTwoComponent } from './task-two/task-two.component';
import { AppService } from './app.service';
import { bgColorChangeDirective } from './directives/bgColorChange.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskOneComponent,
    HighlightDirective,
    CalculateAgePipe,
    UserNamePape,
    TaskTwoComponent,
    bgColorChangeDirective,
  ],
  imports: [BrowserModule],
  providers: [AppService, { provide: ElementRef, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
