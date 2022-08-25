import { Component } from '@angular/core';
import { Menu } from '../models';

@Component({
  selector: 'dh-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Angular',
      svgIcon: 'angular',
      link: '/angular',
      color: '#ff7f0e'
    },
    {
      title: 'c#',
      svgIcon: 'csharp',
      link: '/csharp',
      color: '#ff7f0e'
    },
    // {
    //   title: 'C#',
    //   svgIcon: 'csharp',
    //   color: '#ff7f0e',
    //   subMenu: [
    //     {
    //       title: 'Sales',
    //       icon: 'angular',
    //       link: '/sales',
    //       color: '#ff7f0e'
    //     },
    //     {
    //       title: 'Customers',
    //       icon: 'angular',
    //       link: '/customers',
    //       color: '#ff7f0e'
    //     }
    //   ]
    // }
  ];
}