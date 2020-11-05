import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes: Quote[] = [
    new Quote('My mission in life is not merely to survive, but to thrive; and to do so with passion, some passion, some compassion, some humor, and some style ', 'Maya Angelou ', 'Me', new Date(2020, 11, 5)),
    new Quote('She pictures love as a pond to be stepped into , swum around in, and then climbed out of and toweled off before getting too chilly', 'Erica Knowles', 'Me', new Date(2010, 11, 14)),
    new Quote('Growth is a series o mistakes ', 'Steve Harvey', 'Me', new Date(2015, 11, 14)),
    new Quote('And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom ', 'Eve Nyarango ', 'Me', new Date(2010, 11, 14))
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }
 
  ngOnInit(): void { 
  } 

}
