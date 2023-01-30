import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName',
})
export class UserNamePape implements PipeTransform {
  transform(usersArr: any) {
    return usersArr.map((user: any) => user.firstName).join(', ');
  }
}
