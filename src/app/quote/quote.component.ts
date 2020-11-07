import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes: Quote[] = [
    new Quote('My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style ', 'Maya Angelou ', 'Eve', new Date(2020, 11, 5)),
    new Quote('Its easy to pretend to be fierce and fearless because living your truth takes real courage ', 'Erica Knowles', 'Eve', new Date(2010, 11, 14)),
    new Quote('Growth is a series of mistakes ', 'Steve Harvey', 'Eve', new Date(2015, 11, 14)),
    new Quote('And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom ', 'Eve Nyarango ', 'Eve', new Date(2010, 11, 14))
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Do you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }
  completeDate(complete: boolean){
    
  }
  high:number;
  author:string;
  submittedBy:String; 
  quote:String;
  low:number;
  day:any;

  highLikes() {
    this.high = 0;
  for (let i = 0;i<this.quotes.length;i++){
    if(this.quotes[i].upVote>this.high){
      this.high = this.quotes[i].upVote;
      this.author = this.quotes[i].author;
      this.submittedBy = this.quotes[i].submittedBy;
      this.quote = this.quotes[i].quote;
      this.low = this.quotes[i].downVote;
      this.day = this.quotes[i].since;
    }
  }
  }
  constructor() { }
 
  ngOnInit(): void { 
  } 

}
