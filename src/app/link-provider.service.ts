import { Injectable } from '@angular/core';
import { Link } from './interface/Link';

const HEADER_LINKS: Link[] = [
  {url: '/dashboard' , title: 'Dashboard', isGroup: false , subLinks: null},
  {url: '/bulletin' , title: 'Bulletin', isGroup: false , subLinks: null}
];

const SIDEBAR_LINKS: Link[] = [
  {url: '/' , title: 'Title1', isGroup: false, subLinks: null, state: 'collepse'},
  {url: '/' , title: 'Title2', isGroup: false, subLinks: null, state: 'collepse'},
  {url: '/' , title: 'Title3', isGroup: true, subLinks: [
    {url: '/' , title: 'SubTitle1', isGroup: false, subLinks: null, state: 'collepse'},
    {url: '/' , title: 'SubTitle2', isGroup: false, subLinks: null, state: 'collepse'},
    {url: '/bulletin' , title: 'Bulletin', isGroup: false, subLinks: null, state: 'collepse'}
  ], state: 'collepse'},
  {url: '/' , title: 'Title4', isGroup: true, subLinks: [
    {url: '/' , title: 'SubTitle1', isGroup: false, subLinks: null, state: 'collepse'},
    {url: '/' , title: 'SubTitle2', isGroup: false, subLinks: null, state: 'collepse'},
    {url: '/bulletin' , title: 'Bulletin', isGroup: false, subLinks: null, state: 'collepse'},
    {url: '/' , title: 'SubTitle3', isGroup: false, subLinks: null, state: 'collepse'},
    {url: '/' , title: 'SubTitle4', isGroup: true, subLinks: [
      {url: '/' , title: 'SubTitle1', isGroup: false, subLinks: null, state: 'collepse'},
      {url: '/' , title: 'SubTitle2', isGroup: false, subLinks: null, state: 'collepse'},
      {url: '/bulletin' , title: 'Bulletin', isGroup: false, subLinks: null, state: 'collepse'}
    ], state: 'collepse'},
    {url: '/bulletin' , title: 'Bulletin', isGroup: false, subLinks: null, state: 'collepse'}
  ], state: 'collepse'},
  {url: '/' , title: 'Title5', isGroup: false, subLinks: null, state: 'collepse'}
];

@Injectable()
export class LinkProviderService {
  headerLink: Link[] = HEADER_LINKS;
  sidebarLink: Link[] = SIDEBAR_LINKS;

  constructor() { }

}
