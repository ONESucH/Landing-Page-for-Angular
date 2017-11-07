import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

/* Регистрируем компоненты */
import {AppHeader} from './header/header.component';
import {AppComponent} from './app.component';
import {MainSectionComponent} from './main-section/main-section.component';

@NgModule({
    declarations: [
        AppHeader,
        AppComponent,
        MainSectionComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppHeader, AppComponent, MainSectionComponent]
})
export class AppModule {}
