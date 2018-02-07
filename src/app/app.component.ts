import { Http } from '@angular/http';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Rx';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Device, DeviceWidth } from './enums';

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
export class AppComponent implements OnInit {

  deviceType: Device;
  _show_header: boolean;
  _show_sidebar: boolean;
  // default state of sidebar
  sidebar_state = 'inactive';
  // default state of content
  content_state = this.sidebar_state === 'inactive' ? 'full' : 'compression';
  width: number;
  name: string;

  constructor(private http: Http) {
    this.getConfig().subscribe(config => {
      this._show_header = config.show_header;
      this._show_sidebar = config.show_sidebar;
    });
  }
  ngOnInit() {
    this.width = window.innerWidth;
    this.detectWindowResize();
    this.detectDeviceSize();
  }

  toggleSideBar() {
    // 側邊欄關閉狀態
    this.sidebar_state = this.sidebar_state === 'active' ? 'inactive' : 'active';
    // 內容區塊展開狀態
    this.content_state = this.content_state === 'compression' ? 'full' : 'compression';
  }

  // get configuration form app.config.json
  private getConfig() {
    return this.http.get('./app.config.json')
                    .map( (res: any) => res.json());
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
