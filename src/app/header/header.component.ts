import { LinkProviderService } from '../link-provider.service';
import { Observable } from 'rxjs/Rx';

import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Link } from '../interface/Link';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Device } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , OnChanges {

  constructor(private link_pvd: LinkProviderService) { }

  @Input() deviceType: Device;
  @Output() onSideBarOpen = new EventEmitter();

  linksIsShow = true;

  links: Link[] = this.link_pvd.headerLink;

  ngOnInit() {
    this.handleRWD();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleRWD();
  }

  private handleRWD() {
    console.log(`change and type is ${this.deviceType}`);
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
