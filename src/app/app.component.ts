import { CarouselComponent } from './unit/carousel/carousel.component';
import { NavComponent } from './unit/nav/nav.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DepartmentComponent } from './page/department/department.component';
import { CardComponent } from './unit/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'})
export class AppComponent {
  title = 'second-project';
}
