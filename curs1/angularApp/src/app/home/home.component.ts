import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  home:string= 'titlu din home Component';
  user={
    nume:'Popescu',
    prenume:'Dan'
  };
  imageURL='https://www.google.com/url?sa=i&url=https%3A%2F%2Fro.wikipedia.org%2Fwiki%2FFi%25C8%2599ier%3AImagini.jpg&psig=AOvVaw2jxL6J3pD4hoT0xdJq9Z4L&ust=1718634537995000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjikcGq4IYDFQAAAAAdAAAAABAE'


}
