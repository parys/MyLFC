import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable()
export class CustomTitleService {
    private count: number = 0;
    private title: string = `MyLFC.ru - Сайт русскоязычных болельщиков "Ливерпуля"`;
    constructor(
        private titleService: Title) {
    }

    public addCount(newCount: number): void {
        this.count += newCount;
        console.warn("addCount = " + this.count);
        this.updateTitle();
    }

    public removeCount(newCount: number): void {
        this.count -= newCount;
        console.warn("removeCount = " + this.count);
        this.updateTitle();
    }

    public setTitle(newTitle: string): void {
        this.title = newTitle;
        console.warn("setTitle = " + this.title);
        this.updateTitle();
    }

    private updateTitle(): void {
        console.log(1);
        if (this.count !== 0) {
            console.log(2);
            this.titleService.setTitle(`(${this.count}) ${this.title}`);
        } else {
            console.log(3);
            this.titleService.setTitle(this.title);
        }
    }
}
