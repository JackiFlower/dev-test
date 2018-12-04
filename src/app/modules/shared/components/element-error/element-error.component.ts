import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'element-error',
  templateUrl: './element-error.component.html',
  styleUrls: ['./element-error.component.scss']
})
export class ElementErrorComponent {

  @Output() notifyRetry = new EventEmitter();

  doRetry () {
    this.notifyRetry.emit();
  }

}
