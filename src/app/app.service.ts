import { Component, Injectable } from '@angular/core';

enum Status {
  Deleted = 'deleted',
  Active = 'active',
  Inactive = 'inactive',
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  userArr = [
    {
      firstName: 'Giorgi',
      lastName: 'Bazerashvili',
      about: 'Giorgi',
      birthDate: '10/22/1997',
      status: Status.Deleted,
    },
    {
      firstName: 'Mamuka',
      lastName: 'Bazerashvili1',
      about: 'Mamuka',
      birthDate: '5/14/2000',
      status: Status.Active,
    },
    {
      firstName: 'Guram',
      lastName: 'Dgebuadze',
      about: 'Guram',
      birthDate: '11/2/1992',
      status: Status.Inactive,
    },
  ];

  showList = false;
  showLoading = false;
  empty = true;
  showListFn() {
    if (!this.showList) {
      this.showLoading = true;
    }
    this.empty = false;
    setTimeout(() => {
      this.showList = true;
      this.showLoading = false;
    }, 1000);
  }
}
