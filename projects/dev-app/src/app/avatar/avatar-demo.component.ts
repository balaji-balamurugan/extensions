import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dev-avatar-demo',
  templateUrl: './avatar-demo.component.html',
  styleUrls: ['./avatar-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarDemoComponent {}
