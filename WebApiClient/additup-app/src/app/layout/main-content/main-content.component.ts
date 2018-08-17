import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  public showAddItUp = false;
  @ViewChild('tabGroup') tabGroup: MatTabGroup;

  constructor() {}

  ngOnInit() {}

  showGameItem($event: IGame) {
    console.log('From dashboard run' + $event.Title);
    if ($event.UniqueName === 'add_it_up' && this.tabGroup.selectedIndex !== 1) {
      this.showAddItUp = true;
      this.tabGroup.selectedIndex = 1;
    }
  }
}
