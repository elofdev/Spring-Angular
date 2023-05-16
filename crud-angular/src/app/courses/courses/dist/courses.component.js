"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoursesComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var error_dialog_component_1 = require("../../shared/components/error-dialog/error-dialog.component");
var CoursesComponent = /** @class */ (function () {
    // Injeção de Dependência forma 1 passo 1
    //  coursesService: CoursesService;
    //-----------------------
    // Injeção de Dependência forma 2 passo 1 - direto no contrutor
    function CoursesComponent(coursesService, dialog, router, route) {
        var _this = this;
        this.coursesService = coursesService;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        // Injeção de Dependência forma 1 passo 2
        //this.coursesService = new CoursesService();
        // Injeção de Dependência forma 1 passo 3
        this.courses$ = this.coursesService.listAll().pipe(operators_1.catchError(function (error) {
            _this.onError('Erro ao carregar a lista de cursos.');
            return rxjs_1.of([]);
        }));
    }
    CoursesComponent.prototype.onError = function (errorMsg) {
        this.dialog.open(error_dialog_component_1.ErrorDialogComponent, {
            data: errorMsg
        });
    };
    CoursesComponent.prototype.ngOnInit = function () { };
    CoursesComponent.prototype.onAdd = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    CoursesComponent.prototype.onEdit = function () {
        console.log('onEdit');
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'app-courses',
            templateUrl: './courses.component.html',
            styleUrls: ['./courses.component.scss']
        })
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
