import { ElementRef, Injectable, OnDestroy } from '@angular/core';

enum Status {
  Deleted = 'deleted',
  Active = 'active',
  Inactive = 'inactive',
}

const userArr = [
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

@Injectable({
  providedIn: 'root',
})
export class AppService implements OnDestroy {
  listItems = Array(49).fill('');

  getUsers(): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(userArr);
      }, 3000);
    });
  }

  ngOnDestroy() {}
}
