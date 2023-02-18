export class News {
    headline:string;
    category:string;
    mainNews:string;
    imageName:string;
    

    constructor(
        headline:string,
        category:string,
        mainNews:string,
        imageName:string
    )
    {
          this.headline = headline;
          this.category = category;
          this.mainNews = mainNews;
          this.imageName = imageName;
    }
    
}
