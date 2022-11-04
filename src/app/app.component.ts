import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'angular-eslint-prettier-husky-base';
    somevariable: any;

    x = 1;

    public someVoidMethod(): void {
        console.log('somestring');
    }

    public getSomeString(): string {
        return 'someotherstring';
    }
}
