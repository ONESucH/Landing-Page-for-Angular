// Данный файл "app.component.ts" - корневой компонент того, что станет деревом вложенных компонентов по мере развития приложения
// Импортирование
import {Component} from '@angular/core';

@Component({
    selector: 'app-root', //  Это корневой компонент, находится в index.html
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {}
