import { LinkProviderService } from '../link-provider.service';
import { Link } from '../interface/Link';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { state, style, transition, trigger, animate } from '@angular/animations';
import { Device } from '../enums';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [
    trigger('sidebarDropdown', [
      state('dropdown', style({
        opacity: 1,
        // height: 'fit-content',
        display: 'inline-block'
      })),
      state('collepse', style({
        opacity: 0,
        // height: '0',
        display: 'none'
      })),
      transition('dropdown => collepse' , animate(`100ms ease-out`)),
      transition('collepse => dropdown' , animate(`100ms ease-in`))
    ]),
    trigger('rotateArrow', [
      state('dropdown', style({
        transform: 'rotate(90deg)'
      })),
      state('collepse', style({
        transform: 'rotate(0deg)'
      })),
      transition('dropdown => collepse' , animate(`100ms linear`)),
      transition('collepse => dropdown' , animate(`100ms linear`))
    ])
  ]
})
export class SideBarComponent implements OnInit , OnChanges {

  constructor(private linkServ: LinkProviderService) { }

  @Input() deviceType: Device;
  links: Link[] = this.linkServ.sidebarLink;
  topLinks: Link[] = this.linkServ.headerLink;

  isCombinLinks: boolean;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleRWD();
  }

  onToggleSubMenu(link: Link) {
    link.state = link.state === 'collepse' ? 'dropdown' : 'collepse';

  }

  private handleRWD() {
    // console.log(`change and type is ${this.deviceType}`);
    switch (this.deviceType) {
      case Device.LapTop:
        this.isCombinLinks = false;
        break;
      case Device.Pad:
        this.isCombinLinks = false;
        break;
      case Device.Phone5x:
        this.isCombinLinks = true;
        break;
      case Device.Phone4x:
        this.isCombinLinks = true;
        break;
      case Device.Unknown:
        this.isCombinLinks = false;
        break;
      default:
        this.isCombinLinks = false;
        break;
    }

  }

}
