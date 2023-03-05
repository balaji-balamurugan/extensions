import { Component, Input } from '@angular/core';

@Component({
  selector: 'avatar-image',
  template: ``,
})
export class AvatarImage {
  private _src!: string;

  @Input()
  set src(value: string) {
    this._src = value;
  }
  get src() {
    return this._src;
  }
}
