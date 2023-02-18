import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { News } from '../news';
import { NewsOperationService } from '../news-operation.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {
  __newsService:NewsOperationService; 
  router:Router;
  activeRoute:ActivatedRoute;
   n:News = new News('','','','');
    constructor(newsService:NewsOperationService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__newsService = newsService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchCategory= this.activeRoute.snapshot.params['category']; 
    console.log(searchCategory);
    this.n= this.__newsService.getNewsByCategories(searchCategory); 
    console.log(this.n);
  }

}