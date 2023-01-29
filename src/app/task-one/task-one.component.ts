import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.scss'],
})
export class TaskOneComponent {
  get userArr() {
    return this.appService.userArr;
  }
  constructor(public appService: AppService) {}

  ngOnInit(): void {}
}
