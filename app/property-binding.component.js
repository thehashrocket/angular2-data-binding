System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var PropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PropertyBindingComponent = (function () {
                function PropertyBindingComponent() {
                    this.name = '';
                }
                PropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-property-binding',
                        template: "\n        <h2>This is the child component</h2>\n        <p>Hey {{myName}} and I'm {{myAge}} years old!</p>\n    ",
                        inputs: ['myName', 'myAge']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            }());
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFDLEVBQUUsQ0FBQztnQkFDWixDQUFDO2dCQVhEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjt3QkFDL0IsUUFBUSxFQUFFLGtIQUdUO3dCQUNELE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUM7cUJBQzdCLENBQUM7OzRDQUFBO2dCQUlGLCtCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwrREFFQyxDQUFBIiwiZmlsZSI6InByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXByb3BlcnR5LWJpbmRpbmcnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMj5UaGlzIGlzIHRoZSBjaGlsZCBjb21wb25lbnQ8L2gyPlxuICAgICAgICA8cD5IZXkge3tteU5hbWV9fSBhbmQgSSdtIHt7bXlBZ2V9fSB5ZWFycyBvbGQhPC9wPlxuICAgIGAsXG4gICAgaW5wdXRzOiBbJ215TmFtZScsJ215QWdlJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnQge1xuICAgIG5hbWU9Jyc7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
