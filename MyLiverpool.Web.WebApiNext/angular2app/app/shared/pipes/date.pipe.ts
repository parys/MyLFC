import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({ name: "customDate" })
export class CustomDatePipe implements PipeTransform {
    public transform(value: string, withSeconds: boolean = false, withDayOfWeek: boolean = false): string {
        const datePipe = new DatePipe("ru-RU");
        if (this.isToday(value)) {
            return `сегодня ${datePipe.transform(value, withSeconds ? "j:mm:ss" : "j:mm")}`;
        }
        if (this.isYesterday(value)) {
            return `вчера ${datePipe.transform(value, withSeconds ? "j:mm:ss" : "j:mm")}`;
        }
        return datePipe.transform(value, `d MMM y ${withDayOfWeek ? "EEE" : ""} j:mm${withSeconds ? ":ss" : ""}`);
    }

    private isToday(date: string): boolean {
        if (this.isDateEqual(new Date(date), new Date())) {
            return true;
        }
        return false;
    }

    private isYesterday(date: string): boolean {
        const oldDate = new Date();
        oldDate.setTime(oldDate.getTime() - (24 * 3600000));

        if (this.isDateEqual(new Date(date), oldDate)) {
            return true;
        }
        return false;
    }

    private isDateEqual(date1: Date, date2: Date): boolean {
        return date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear();
    }
}