import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Rx';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnChanges, OnInit } from '@angular/core';

export enum Device {
  LapTop = 1,
  Pad = 2,
  Phone5x = 3,
  Phone4x = 4,
  Unknown = 9
}

export enum DeviceWidth {
  LapTop = 1024,
  Pad = 768,
  Phone5x = 414,
  Phone4x = 375
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('sideBarState', [
      state('active', style({
        left: '0'
      })),
      state('inactive', style({
        left: '-260px'
      })),
      transition('active => inactive', animate(`300ms ease-in`)),
      transition('inactive => active', animate(`300ms ease-out`))
    ]),
    trigger('contentState', [
      state('full', style({
        paddingLeft: '0'
      })),
      state('compression', style({
        paddingLeft: '260px'
      })),
      transition('compression => full', animate(`300ms ease-in`)),
      transition('full => compression', animate(`300ms ease-out`))
    ])
  ]
})
export class AppComponent implements OnInit, OnChanges {

  deviceType: Device;
  sidebar_state = 'active';
  content_state = 'compression';
  width: number;

  constructor() { }
  ngOnInit() {
    this.width = window.innerWidth;
    this.detectWindowResize();
    this.detectDeviceSize();
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  toggleSideBar(sidebar) {
    // 側邊欄關閉狀態
    this.sidebar_state = this.sidebar_state === 'active' ? 'inactive' : 'active';
    // 內容區塊展開狀態
    this.content_state = this.content_state === 'compression' ? 'full' : 'compression';
  }

  private detectWindowResize() {
    Observable.fromEvent(window, 'resize').subscribe( () => {
      this.width = window.innerWidth;
      this.detectDeviceSize();
    });
  }

  private detectDeviceSize() {
    if (this.width >= DeviceWidth.LapTop) {
      this.deviceType = Device.LapTop;
    }else if (this.width >= DeviceWidth.Pad && this.width < DeviceWidth.LapTop) {
      this.deviceType = Device.Pad;
    }else if (this.width >= DeviceWidth.Phone5x && this.width < DeviceWidth.Pad) {
      this.deviceType = Device.Phone5x;
    }else if (this.width >= DeviceWidth.Phone4x && this.width < DeviceWidth.Phone5x) {
      this.deviceType = Device.Phone4x;
    }else {
      this.deviceType = Device.Unknown;
    }
  }
}
