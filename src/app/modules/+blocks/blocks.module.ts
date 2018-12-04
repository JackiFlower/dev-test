import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BlocksRoutesModule } from './blocks.routes.module';
import { PageBlocksComponent } from './page-blocks/page-blocks.component';

@NgModule({
  declarations: [
    PageBlocksComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    BlocksRoutesModule
  ]
})
export class BlocksModule {
}
