import { Component, OnInit } from '@angular/core';

export interface List {
  id: number;
  hasParent?: boolean;
  title: string;
  isOpened?: boolean,
  active?: boolean,
  icon?: string,
  route?: string,
  child: List[]
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public list: List[];

  constructor() { 
    this.list = [
      {
        id: 1,
        hasParent: false,
        title: 'Home',
        isOpened: false,
        icon: '',
        route: 'home',
        child: [
          {
            id: 11,
            hasParent: true,
            title: 'Page 1',
            isOpened: false,
            icon: '*',
            route: 'page1',
            child: []
          },
          {
            id: 12,
            hasParent: true,
            title: 'Page 2',
            isOpened: false,
            icon: '*',
            route: 'page2',
            child: []
          },
          {
            id: 13,
            hasParent: true,
            title: 'Page 3',
            isOpened: false,
            icon: '*',
            route: 'page3',
            child: []
          }
        ]
      },
      {
        id: 2,
        hasParent: false,
        title: 'About',
        isOpened: false,
        icon: '',
        route: 'about',
        child: [
          {
            id: 21,
            hasParent: true,
            title: 'Page 4',
            isOpened: false,
            icon: '*',
            route: 'page4',
            child: [
              { 
                id: 221,
                hasParent: true,
                title: 'Page 5',
                isOpened: false,
                icon: '**',
                route: 'page5',
                child: [] 
              },
              { 
                id: 222,
                hasParent: true,
                title: 'Page 6',
                isOpened: false,
                icon: '**',
                route: 'page6',
                child: [] 
              }
            ]
          },
          {
            id: 22,
            hasParent: true,
            title: 'Page 7',
            isOpened: false,
            icon: '*',
            route: 'page7',
            child: []
          },
          {
            id: 23,
            hasParent: true,
            title: 'Page 8',
            isOpened: false,
            icon: '*',
            route: 'page8',
            child: [
              { 
                id: 231,
                hasParent: true,
                title: 'Page 9',
                isOpened: false,
                icon: '**',
                route: 'page9',
                child: [] 
              },
              { 
                id: 232,
                hasParent: true,
                title: 'Page 10',
                isOpened: false,
                icon: '**',
                route: 'page10',
                child: [] 
              }
            ]
          }
        ]
      }
    ]
   }


  ngOnInit(): void { }

  openSubMenu(item: List, list: List[]) {
    let menuList: any[];
    if(item.hasParent) {
      menuList = list;
    }else {
      menuList = this.list
    }
    if(item.isOpened && !item.hasParent && item.child.length>0) {
      item.isOpened = false
      this.recursiveCloseMethod(item.child)
      return
    }
    for(let el of menuList) {
      if(el.id === item.id) {
        el.isOpened = true;
      } else {
        el.isOpened = false;
        if(el.child.length>0) {
          this.recursiveCloseMethod(el.child)
        }
      }
    }
  }

  recursiveCloseMethod(list: List[]) {
    for(let item of list) {
      item.isOpened = false;
      if(item.child.length > 0) {
        this.recursiveCloseMethod(item.child)
      } 
      else {
        item.isOpened = false;
      }
    }
  }

}
