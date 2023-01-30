import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.scss'],
})
export class TaskOneComponent {
  isLoading = false;
  userArr: any[] = [];
  constructor(public appService: AppService) {}

  async loadUsers() {
    this.isLoading = true;
    this.userArr = await this.appService.getUsers();
    this.isLoading = false;
  }

  ngOnInit(): void {}
}
