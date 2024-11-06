import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getNumbers(nums: number): string[] {
    function numberToArray(num) {
      return Array.from({ length: num }, (_, index) => String(index + 1));
    }
    return numberToArray(nums)
  }
}
