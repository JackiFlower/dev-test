import { Component, OnDestroy, OnInit } from '@angular/core';
import { HelpersService } from '../../sirvices/helpers.service';

@Component({
  selector: 'element-loading',
  templateUrl: './element-loading.component.html',
  styleUrls: ['./element-loading.component.scss']
})
export class ElementLoadingComponent implements OnInit, OnDestroy {

  private progressValue = 0;
  private intervalSource: number;

  constructor(
    private helpersService: HelpersService
  ) {
  }

  ngOnInit(): void {

    // temp: fake progress (implement with Input)

    const randomSpeed = this.helpersService.getRandomNumber(125, 175);
    this.intervalSource = setInterval(() => {
      this.progressValue += this.progressValue >= 100 ? 0 : 5;
    }, randomSpeed);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalSource);
  }

}
