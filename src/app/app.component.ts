import { Component } from '@angular/core';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes-Directive';
  products : IProduct[] =[];
  imageWidth : number = 50;
  imageMargin : number = 2;
  imageHeight : number = 50;
  showImage = false;
  searchText ='';

  //function which construct the objects 
  constructor()
  {
    //this is not correct way of doing this work 
    this.products=this.getProducts();
    console.log(this.products); 

  }

  // If binding from method is required in ngStyle
  getColor(quantity :number) :string{
    return quantity > 50 ? 'green' : 'red';
  }

  toggleImage()
  {
    this.showImage = !this.showImage;
  }

  //On live project service,API(anything with HTTP protocol)
  getProducts() : IProduct[] 
  {
    return [
      {
        "image" :"./assets/images/pic1-front.jpg",
        "name":"Tshirt 1",
        "price":700,
        "quantity": 100
      },
      {
        "image" :"assets/images/pic2-front.jpg",
        "name":"Tshirt 2",
        "price":800,
        "quantity": 50

      },
      {
        "image" :"assets/images/pic3-front.jpg",
        "name":"Tshirt 3",
        "price":1200,
        "quantity": 500

      },
      {
        "image" :"assets/images/pic1-front.jpg",
       "name":"Tshirt 4",
        "price":899,
        "quantity": 20

      }
    ]    
  }
}

