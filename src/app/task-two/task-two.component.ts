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
  constructor(public appService: AppService) {}
}
