import {Component} from '@angular/core';

@Component({
    selector: 'app-main-section',
    templateUrl: './main-section.component.html',
    styleUrls: ['./main-section.component.less']
})

export class MainSectionComponent {
    title = 'Привет, пользователь';
    body = 'Ты находишься на сайте разработчика';
    text = 'Мой опыт разработки составляет не более 2-ух лет';
    mvc = 'Сайт был написан на Angular 5v';
}
