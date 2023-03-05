import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MtxAvatarModule } from '@ng-matero/extensions/avatar';
import { SharedModule } from '../shared.module';
import { AvatarDemoComponent } from './avatar-demo.component';

@NgModule({
  declarations: [AvatarDemoComponent],
  imports: [
    SharedModule,
    MtxAvatarModule,
    RouterModule.forChild([{ path: '', component: AvatarDemoComponent }]),
  ],
})
export class AvatarDemoModule {}
