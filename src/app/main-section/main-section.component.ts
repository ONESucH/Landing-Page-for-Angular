'use strict';

import {Component} from '@angular/core';

@Component({
    selector: 'app-main-section',
    templateUrl: './main-section.component.html',
    styleUrls: ['./main-section.component.less']
})

export class MainSectionComponent {
    title = 'Титул страницы';
    body = 'Какой-то текст в теле страницы';
    text = 'Небольшое описание обо мне';
}