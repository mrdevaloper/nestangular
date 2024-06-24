import { CarouselComponent } from '../../unit/carousel/carousel.component';
import { CardComponent } from './../../unit/card/card.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
