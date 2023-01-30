import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.scss'],
})
export class TaskTwoComponent {
  @ViewChildren('listItem') listItems: QueryList<ElementRef> | undefined;

  constructor(public appService: AppService) {}

  taskTwoChangeBgColor(i: number) {
    if (this.listItems) {
      console.log(this.listItems);
      this.listItems.toArray()[i].nativeElement.style.backgroundColor = 'red';
    }
  }
}
