import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-more',
  templateUrl: 'more.page.html',
  styleUrls: ['more.page.scss']
})
export class morePage implements OnInit {
  selectedLanguage: any;
  DefaultLangValue: string;
  constructor(private translateConfigService: TranslateConfigService) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  

  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
    localStorage.setItem("myConfig", this.selectedLanguage);
  }

  ngOnInit(): void {
  }

}