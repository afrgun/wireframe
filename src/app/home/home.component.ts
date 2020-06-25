import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public limit: number = 5;
  public listVideo : any = [];
  public listVideoUrl : any = [];
  public newVideo : any = [];
  public newArticle : any = [];

  constructor(
	  private service: ApiService
  ) { }

  ngOnInit(): void {
    this.loadDataWIthUrl();
    this.loadData();
	this.loadArticles();
	
    setTimeout(()=>{
      this.joinValue();
    }, 700)
  }


  loadData(){
    this.service.getVideo(this.limit).subscribe(data => {
      this.listVideo = data['list'];
    })
  }

  loadDataWIthUrl(){
    this.service.getVideoUrl(this.limit).subscribe(data => {
      this.listVideoUrl = data['list'];
    })
  }

  joinValue(){
    const newData = this.listVideo.map((obj, i)=>({...obj,'video':this.listVideoUrl[i].embed_url}));
    this.newVideo = newData;
  }

  loadArticles(){
    this.service.getArticles().subscribe(data => {
      this.newArticle = data['articles']

    })

  }

  handleDeleteActivity(index) {
    this.newArticle.splice(index,1);
  }

}
