import { Injectable } from '@angular/core';

@Injectable()
export class HelpersService {

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
