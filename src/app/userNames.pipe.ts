import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName',
})
export class UserNamePape implements PipeTransform {
  transform(usersArr: any) {
    console.log('gurami');
    return usersArr.map((user: any) => user.firstName);
  }
}
