import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { SharedService } from 'src/app/services/shared.service'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    language!: string
    constructor(private shared: SharedService, public translate: TranslateService) {}

    ngOnInit(): void {
        if (localStorage.getItem('lang'))
            this.translate.setDefaultLang(localStorage.getItem('lang')!)
        else this.translate.setDefaultLang('pl')
    }
    switchLanguage(language: string) {
        this.shared.setLanguage(language)
        this.translate.setDefaultLang(this.shared.getLanguage())
        localStorage.setItem('lang', this.shared.getLanguage())
    }
}
