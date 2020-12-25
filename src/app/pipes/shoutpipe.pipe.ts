import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shoutpipe' })
export class ShoutPipe implements PipeTransform {

    transform(value: string): string {
        return value.toLocaleUpperCase();
    }
}
