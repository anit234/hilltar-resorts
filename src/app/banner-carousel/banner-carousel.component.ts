import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent {

  images: string[] = [
    'assets/bhumlu.jpeg',
    'assets/dolalghat.jpeg',
    'assets/mountain.jpeg',
    'assets/mountain2.jpeg'
  ];
  currentIndex: number = 0;

  captions: string[] = [
    'We offer your luxury stay and delicious fooding',
    'Experience the heart of Nepali culinary heritage with every bite at our authentic food resort.',
    'Make your holiday more memorable !!!',
    'Get connected with your friends and family !!!'
  ];



  changeImage() {

    // Increment currentIndex or reset to 0 if it exceeds the array length
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }


  slideChanged() {
    // If you want to perform additional actions when the slide changes, you can do it here
  }

}
