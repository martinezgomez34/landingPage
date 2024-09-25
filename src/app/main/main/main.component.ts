import { Component } from '@angular/core';
import { CardComponent } from '../../card/card/card.component';
import { CardLikeComponent } from '../../card/card-like/card-like.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CardComponent,
    CardLikeComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
