import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({ name: "customDate" })
export class CustomDatePipe implements PipeTransform {
    public transform(value: string, withSeconds: boolean = false, withDayOfWeek: boolean = false, withoutTime: boolean = false, withoutYear: boolean = false): string {
        const datePipe = new DatePipe("ru-RU");
        let dateString = "";
        if (this.isToday(value, withoutYear)) {
            dateString += "сегодня";
        } else if (this.isYesterday(value, withoutYear)) {
            dateString += "вчера";
        } else if (this.isTomorrow(value, withoutYear)) {
            dateString += "завтра";
        } else {
            dateString += datePipe.transform(value,`d MMM y ${withDayOfWeek ? "EEE" : ""}`);
        }
        return dateString + datePipe.transform(value, ` ${withoutTime ? "" : " j:mm"}${!withoutTime && withSeconds ? ":ss" : ""}`);
    }

    private isToday(date: string, withoutYear: boolean): boolean {
        if (this.isDateEqual(new Date(date), new Date(), withoutYear)) {
            return true;
        }
        return false;
    }

    private isTomorrow(date: string, withoutYear: boolean): boolean {
        const newDate = new Date();
        newDate.setTime(newDate.getTime() + (24 * 3600000));

        if (this.isDateEqual(new Date(date), newDate, withoutYear)) {
            return true;
        }
        return false;
    }

    private isYesterday(date: string, withoutYear: boolean): boolean {
        const oldDate = new Date();
        oldDate.setTime(oldDate.getTime() - (24 * 3600000));

        if (this.isDateEqual(new Date(date), oldDate, withoutYear)) {
            return true;
        }
        return false;
    }

    private isDateEqual(date1: Date, date2: Date, withoutYear: boolean): boolean {
        return date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            (withoutYear || date1.getFullYear() === date2.getFullYear());
    }
}