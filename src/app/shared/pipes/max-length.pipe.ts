import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

    transform(value: string, typeText: string): string {
        if (value) {
            if (typeText === 'cardText' && value.length >= 39) {
                return value.substring(0, 39).concat('...');
            }
            if (typeText === 'cardTitle' && value.length >= 28) {
                return value.substring(0, 24).concat('...');
            }
        }
        return value;
    }

}
