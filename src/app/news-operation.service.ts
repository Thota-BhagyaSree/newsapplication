import { Injectable } from '@angular/core';
import { News } from './news';
@Injectable({
  providedIn: 'root'
})
export class NewsOperationService {

  constructor() { 
    let news1:News=new News('tax payers in india','BusinessNews','India lost 2 Bhutans worth of individual taxpayers to Covid-19 pandemic','news.jpg')
    let news2:News=new News('stock Market of Indigo','BusinessNews','the stock market ends with loss today','news.jpg')
    let news3:News=new News('Some issues in indian politics','Politics','BBC row shows Indian politics has come a full circle','news.jpg')
    let news4:News=new News('The Murder in Delhi','Crime','an 30 years person was murdered by some people for money','news.jpg')
    let news5:News=new News('syria earthqauke ','World','Turkey-Syria earthquakes: Death toll crosses 46,000','news.jpg')
    let news6:News=new News('New AI Technology','Technology','The new technology was launched into market AI','news.jpg')
    let news7:News=new News('India vs Australia, 2nd Test Day 2 Highlights:','Sports',' Nathan Lyon Takes 5 Wickets As Australia End Day 2 On A High vs India','news.jpg')
    
    this.newsArr.push(news1)
    this.newsArr.push(news2)
    this.newsArr.push(news3)
    this.newsArr.push(news4)
    this.newsArr.push(news5)
    this.newsArr.push(news6)
    this.newsArr.push(news7)
  }

  newsArr:News[] = [];

  getNewsArr():News[]
  {
    return this.newsArr;
  }
  getNewsByCategory(filterCategory:string):News[]
  {
    
   let outputArr:News[] = [];

    this.newsArr.forEach(n=>{
      if(n.category == filterCategory)
      {
        outputArr.push(n);
      }
    });

    return outputArr;
  }
  getNewsByCategories(searchCategory:string):News
  {
    let outputNews:News = new News('','','','');
    for(let i=0;i<this.newsArr.length;i++)
    {
      let thisNews:News = this.newsArr[i];
        if(thisNews.category == searchCategory)
        {
          outputNews = thisNews;
          break;
        }
    }
    
    return outputNews;
  }
}
