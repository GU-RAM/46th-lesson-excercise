import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName',
})
export class UserNamePape implements PipeTransform {
  transform(usersArr: any) {
    let names = '';

    usersArr.forEach((user: any) => (names += user.firstName + ', '));

    // usersArr.map((user: any) => user.firstName);
    return names;
  }
}
