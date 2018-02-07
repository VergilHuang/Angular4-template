import { Injectable } from '@angular/core';
import { Link } from './interface/Link';

const HEADER_LINKS: Link[] = [
  {url: '/dashboard' , display: 'Dashboard', title: 'This is title' , isGroup: false , subLinks: null},
  {url: '/bulletin' , display: 'Bulletin', title: 'This is title' , isGroup: false , subLinks: null}
];

// only support for three-level sidebar menu
const SIDEBAR_LINKS: Link[] = [
  {url: '/' , display: 'Title1', title: 'This is title' , isGroup: false, subLinks: null, state: 'collepse'},
  {url: '/' , display: 'Title2', title: 'This is title' , isGroup: false, subLinks: null, state: 'collepse'},
  {url: '/' , display: 'Title3', title: 'This is title' , isGroup: true, subLinks: [
    {url: '/' , display: 'SubTitle1', title: 'This is title' , isGroup: false, subLinks: null, state: 'collepse'},
    {url: '/' , display: 'SubTitle2', title: 'This is title' , isGroup: false, subLinks: null, state: 'collepse'},
    {url: '/bulletin' , display: 'Bulletin', title: 'This is title' , isGroup: false, subLinks: null, state: 'collepse'}
  ], state: 'collepse'},
  {url: '/' , display: 'Title4', title: 'This is title' , isGroup: true, subLinks: [
    {url: '/' , display: 'SubTitle1', title: 'This is title' , isGroup: false, subLinks: null, state: 'collepse'},
    {url: '/' , display: 'SubTitle2', title: 'This is title' , isGroup: true, subLinks: [
      {url: '/' , display: 'Sub-subTitle1', title: 'This is title' , isGroup: false, subLinks: null, state: 'collepse'},
      {url: '/' , display: 'Sub-subTitle2', title: 'This is title' , isGroup: false, subLinks: null, state: 'collepse'},
      {url: '/bulletin' , display: 'Bulletin', title: 'This is title' , isGroup: false, subLinks: null, state: 'collepse'}
    ], state: 'collepse'},
    {url: '/bulletin' , display: 'Bulletin', title: 'This is title' , isGroup: false, subLinks: null, state: 'collepse'}
  ], state: 'collepse'},
];

@Injectable()
export class LinkProviderService {
  headerLink: Link[] = HEADER_LINKS;
  sidebarLink: Link[] = SIDEBAR_LINKS;

  constructor() { }

}
