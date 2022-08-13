import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-extra-classes',
  templateUrl: './index-extra-classes.component.html',
  styleUrls: ['./index-extra-classes.component.css']
})
export class IndexExtraClassesComponent implements OnInit {

  constructor() {
    this.changeOfRoutes();
  }

  ngOnInit(): void {}
  changeOfRoutes() {
    const location =
      window.location.pathname.split('/')[
        window.location.pathname.split('/').length - 1
      ];
    var li = document.getElementsByClassName('mars-0004');

    if (li.length !== 0) {
      for (let i = 0; i < li.length; i++) {
        if (li[i].id === location) {
          li[i].classList.add('mars-active-002');
        } else {
          li[i].classList.remove('mars-active-002');
        }
      }
    }
  }
}