System.register(['@angular/core', "./property-binding.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, property_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_binding_component_1_1) {
                property_binding_component_1 = property_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = 'name';
                    this.age = 'age';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <section class=\"parent\">\n            <h2>This is the parent component</h2>\n            <h4>Please enter your name: </h4>\n            <input type=\"text\" [(ngModel)]=\"name\">\n            <input type=\"text\" [(ngModel)]=\"age\">\n            <br/><br/>\n            <p>{{name}}</p>\n            <section class=\"child\">\n                <my-property-binding [myName]=\"name\" [myAge]=\"age\"></my-property-binding>\n            </section>\n        </section>\n        \n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFDLE1BQU0sQ0FBQztvQkFDWixRQUFHLEdBQUMsS0FBSyxDQUFDO2dCQUNkLENBQUM7Z0JBckJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw4ZUFhVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxxREFBd0IsQ0FBQztxQkFDekMsQ0FBQzs7Z0NBQUE7Z0JBSUYsbUJBQUM7WUFBRCxDQUhBLEFBR0MsSUFBQTtZQUhELHVDQUdDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UHJvcGVydHlCaW5kaW5nQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9wZXJ0eS1iaW5kaW5nLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBhcmVudFwiPlxuICAgICAgICAgICAgPGgyPlRoaXMgaXMgdGhlIHBhcmVudCBjb21wb25lbnQ8L2gyPlxuICAgICAgICAgICAgPGg0PlBsZWFzZSBlbnRlciB5b3VyIG5hbWU6IDwvaDQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm5hbWVcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiYWdlXCI+XG4gICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgICA8cD57e25hbWV9fTwvcD5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICA8bXktcHJvcGVydHktYmluZGluZyBbbXlOYW1lXT1cIm5hbWVcIiBbbXlBZ2VdPVwiYWdlXCI+PC9teS1wcm9wZXJ0eS1iaW5kaW5nPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIFxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1Byb3BlcnR5QmluZGluZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBuYW1lPSduYW1lJztcbiAgICBhZ2U9J2FnZSc7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
