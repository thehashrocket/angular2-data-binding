import {Component} from '@angular/core';
import {PropertyBindingComponent} from "./property-binding.component";


@Component({
    selector: 'my-app',
    template: `
        <section class="parent">
            <h2>This is the parent component</h2>
            <h4>Please enter your name: </h4>
            <input type="text" [(ngModel)]="name">
            <input type="text" [(ngModel)]="age">
            <br/><br/>
            <p>{{name}}</p>
            <section class="child">
                <my-property-binding [myName]="name" [myAge]="age"></my-property-binding>
            </section>
        </section>
        
    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent {
    name='name';
    age='age';
}