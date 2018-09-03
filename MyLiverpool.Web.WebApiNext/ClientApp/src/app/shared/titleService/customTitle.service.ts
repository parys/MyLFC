import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable({providedIn: "root"})
export class CustomTitleService {
    private count: number = 0;
    private title: string = `MyLFC.ru - Сайт русскоязычных болельщиков "Ливерпуля"`;
    constructor(private titleService: Title) {
    }

    public addCount(newCount: number): void {
        this.count += newCount;
        this.updateTitle();
    }

    public removeCount(newCount: number): void {
        this.count -= newCount;
        this.updateTitle();
    }

    public setTitle(newTitle: string): void {
        this.title = newTitle;
        this.updateTitle();
    }

    private updateTitle(): void {
        if (this.count !== 0) {
            this.titleService.setTitle(`(${this.count}) ${this.title}`);
        } else {
            this.titleService.setTitle(this.title);
        }
    }
}
