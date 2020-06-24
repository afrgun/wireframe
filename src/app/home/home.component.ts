import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public limit: number = 5;

  constructor(
	  private service: ApiService
  ) { }

  ngOnInit(): void {
	this.loadData();
  }

  loadData(){
    this.service.getVideo(this.limit).subscribe(data => {
      console.log(data);
    })
  }

}
