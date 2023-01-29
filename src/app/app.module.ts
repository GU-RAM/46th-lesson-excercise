import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { CalculateAgePipe } from './calculate-age.pipe';
import { TaskOneComponent } from './task-one/task-one.component';
import { UserNamePape } from './userNames.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskOneComponent,
    HighlightDirective,
    CalculateAgePipe,
    UserNamePape,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
