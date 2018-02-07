import { LinkProviderService } from '../link-provider.service';
import { Observable } from 'rxjs/Rx';

import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Link } from '../interface/Link';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Device } from '../enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , OnChanges {

  constructor(private link_pvd: LinkProviderService) { }

  @Input() deviceType: Device;
  @Input() _show_sidebar: boolean;
  // sidebar-open button click event
  @Output() onSideBarOpen = new EventEmitter();

  // Determine wheter top links have to show up.
  linksIsShow = true;

  links: Link[] = this.link_pvd.headerLink;

  ngOnInit() {
    if (this._show_sidebar) {
      this.handleRWD();
    }

  }

  // When screen size change an interval ,then 'deviceType' from app.component will changed .
  // It will trigger ngOnChanges event .
  ngOnChanges(changes: SimpleChanges): void {
    if (this._show_sidebar) {
      this.handleRWD();
    }

  }

  // Here handles when the screen size changed , then links have to show or not .
  private handleRWD() {
    switch (this.deviceType) {
      case Device.LapTop:
        this.linksIsShow = true;
        break;
      case Device.Pad:
        this.linksIsShow = true;
        break;
      case Device.Phone4x:
        this.linksIsShow = false;
        break;
      case Device.Phone5x:
        this.linksIsShow = false;
        break;
      case Device.Unknown:
        this.linksIsShow = false;
        break;
      default:
        this.linksIsShow = false;
        break;
    }
  }
}
