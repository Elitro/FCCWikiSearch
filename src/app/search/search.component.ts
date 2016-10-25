import { CardObject } from './Models/card';
import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchBox: string;

  cardArray: Array<CardObject> = new Array<CardObject>();

  constructor(private service: SearchService) { }

  ngOnInit() {
  }

  submitSearch(value: any) {
    this.service.getWikiSearch(value.searchBox)
      .subscribe((response: any) => {
        console.log(response);
        let responseArray = response.pages;
        for (let element in responseArray) {
          if (response.pages.hasOwnProperty(element)) {
            let currentCard = new CardObject();
            currentCard.Description = responseArray[element].extract ? responseArray[element].extract : '';
            currentCard.Title = responseArray[element].title ? responseArray[element].title : '';
            try {
              currentCard.Image = responseArray[element].thumbnail.source;
            } catch (e) {
              currentCard.Image = '';
            }

            currentCard.Link = `http://en.wikipedia.org/wiki/${currentCard.Title}`;
            currentCard.Color = Math.round(Math.random() * 4);
            this.cardArray.push(currentCard);
          }
        }
        console.table(this.cardArray);
      });
  }

  getRandomCardColor(color: number): string {

    console.log(color);

    switch (color) {
      case 0:
        return 'card-primary';
      case 1:
        return 'card-success';
      case 2:
        return 'card-info';
      case 3:
        return 'card-warning';
      case 4:
        return 'card-danger';
      default:
        return 'card-primary';
    }
  }

}
