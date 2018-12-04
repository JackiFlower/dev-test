import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-cards',
  templateUrl: './section-cards.component.html',
  styleUrls: ['./section-cards.component.scss']
})
export class SectionCardsComponent {

  @Input() title = '';
  @Input() items: any[] = [];

}
