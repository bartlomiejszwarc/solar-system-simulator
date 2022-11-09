import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  language!: string;
  constructor(
    private shared: SharedService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {}
  switchLanguage(language: string) {
    this.translate.setDefaultLang(language);
  }
}
