import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  @Input() countActivity: any[];
  @Output() dataIndexDelete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteActivity(index){
    this.dataIndexDelete.emit(index);
  }

}
