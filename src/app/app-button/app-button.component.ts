import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-button',
    templateUrl: './app-button.component.html'
})
export class AppButtonComponent {
    @Input() item: string = '';
    @Output() timeHandler = new EventEmitter<string>();

    onClick() {
        alert(`button was clicked by: ${this.item}`);
        this.timeHandler.emit(Date.now().toLocaleString());
    }
}