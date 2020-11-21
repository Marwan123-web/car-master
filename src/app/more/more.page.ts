import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-more',
  templateUrl: 'more.page.html',
  styleUrls: ['more.page.scss']
})
export class morePage implements OnInit {
  selectedLanguage: any;
  DefaultLangValue: string;
  constructor(private translateConfigService: TranslateConfigService,
    public translate: TranslateService) {
    this.selectedLanguage = translate.currentLang

  }


  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
    localStorage.setItem("myConfig", this.selectedLanguage);
  }

  ngOnInit(): void {
  }

}