"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CourseFormComponent = void 0;
var core_1 = require("@angular/core");
var CourseFormComponent = /** @class */ (function () {
    /* injeção do FormBuilder...da classe ReactiveFormsModule */
    function CourseFormComponent(formBuilder, service, snackBar, location) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.snackBar = snackBar;
        this.location = location;
        /* declaramos um form (um grupo de campos), chamamos de "formgroup" */
        this.form = this.formBuilder.group({
            name: [''],
            category: ['']
        });
    }
    CourseFormComponent.prototype.ngOnInit = function () {
    };
    CourseFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.service.save(this.form.value)
            .subscribe(function (result) { return _this.onSuccess(); }, function (error) { return _this.onError(); });
    };
    CourseFormComponent.prototype.onSuccess = function () {
        this.snackBar.open('Curso salvo com Sucesso!', '', { duration: 5000 });
        this.onCancel();
    };
    CourseFormComponent.prototype.onCancel = function () {
        this.location.back();
    };
    CourseFormComponent.prototype.onError = function () {
        this.snackBar.open('Erro ao salvar Curso!', '', { duration: 5000 });
    };
    CourseFormComponent = __decorate([
        core_1.Component({
            selector: 'app-course-form',
            templateUrl: './course-form.component.html',
            styleUrls: ['./course-form.component.scss']
        })
    ], CourseFormComponent);
    return CourseFormComponent;
}());
exports.CourseFormComponent = CourseFormComponent;
