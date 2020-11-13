import { Component } from '@angular/core';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-start',
  templateUrl: 'start.page.html',
  styleUrls: ['start.page.scss']
})
export class startPage {

  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 1000,
    autoplay: {
      disableOnInteraction: false
    }
  };
  slides: any;
  selectedLanguage: any;
  constructor(private translateConfigService: TranslateConfigService) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.slides = [
      {
        title: "Find Your Dream Car",
        description: "Browse through Cairo Belgium Car's inventory for our current brand new and pre-owned cars",
        image: "../../assets/img//logo444.jpg",
        color: "#2662F7",
      },
      {
        title: "Fast Search",
        description: "Advanced search in the largest database of used cars and motorcycles in belgium",
        image: "../../assets/img//logo555.jpg",
        color: "#4BC14B",
      },
      {
        title: "Add Cars To Favourites",
        description: "You can add cars to your favourites list and check them later",
        image: "../../assets/img//logo666.jpg",
        color: "#FD4B4B",
      },

    ];
  }


}
