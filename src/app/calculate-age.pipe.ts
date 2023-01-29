import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAge',
})
export class CalculateAgePipe implements PipeTransform {
  transform(birthdate: any): number {
    const date = new Date(birthdate);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - date.getFullYear();
    const monthDiff = currentDate.getMonth() - date.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < date.getDate())
    ) {
      age--;
    }
    return age;
  }
}
