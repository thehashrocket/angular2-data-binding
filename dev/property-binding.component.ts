import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'my-property-binding',
    template: `
        <h2>This is the child component</h2>
        <p>Hey {{myName}} and I'm {{myAge}} years old!</p>
        <h4>My hobbies are: </h4>
        <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
    `,
    inputs: ['myName','myAge'],
    outputs: ['hobbiesChanged']
})

export class PropertyBindingComponent {
    name='';
    hobbiesChanged = new EventEmitter<string>();
    onHobbiesChanged(hobbies: string) {
        this.hobbiesChanged.emit(hobbies);
    }
}