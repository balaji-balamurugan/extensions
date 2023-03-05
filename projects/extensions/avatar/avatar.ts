import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mtx-avatar',
  exportAs: 'mtxAvatar',
  templateUrl: './avatar.html',
  styleUrls: ['./avatar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxAvatar {
  private _size!: number;
  private _shape: 'rounded' | 'square' = 'square';
  @Input() backgroundColor!: string;
  @Input() color: string = '#fff';

  @Input()
  set size(value: number) {
    if (value < 10 || value > 100) {
      console.warn('AvatarComponent: Invalid size value. Using default size of 50.');
      this._size = 50;
    } else {
      this._size = value;
    }
  }
  get size(): number {
    return this._size;
  }

  @Input()
  set shape(value: 'rounded' | 'square') {
    this._shape = value;
  }
  get shape(): 'rounded' | 'square' {
    return this._shape;
  }

  get borderRadius(): string {
    return this._shape === 'rounded' ? '50%' : '10%';
  }
}
