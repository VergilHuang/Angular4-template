import { Link } from '../interface/Link';
import {LinkProviderService} from '../link-provider.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss']
})
export class HeaderBannerComponent implements OnInit {

  links: Link[] = this.link_pvd.headerLink;

  constructor(private link_pvd: LinkProviderService) { }

  ngOnInit() {

  }
}
