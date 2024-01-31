import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms-and-suits',
  templateUrl: './rooms-and-suits.component.html',
  styleUrls: ['./rooms-and-suits.component.scss']
})
export class RoomsAndSuitsComponent {
  images: string[] = [
    'assets/bhumlu.jpeg',
    'assets/dolalghat.jpeg',
    'assets/mountain.jpeg',
    'assets/mountain2.jpeg'
  ];

}
