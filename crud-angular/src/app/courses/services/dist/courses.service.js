"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoursesService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var CoursesService = /** @class */ (function () {
    //private readonly API = 'assets/courses.json';
    /* Apenas de passar o "private httpCliente:HttpCliente" para o construtor o Angular fornece automaticamente
   o httpCliente para nós é o que chama-mos de Injeção de dependência.
   ou seja dizendo pro Angular que precisamos de uma instancia do HttpCliente e a maneira de fazermos
    isso é através da declaração no construtor */
    function CoursesService(httpClient) {
        this.httpClient = httpClient;
        // Uri do LOCAL/CAMINHO de onde será obtido a informação
        // ou pra onde direcionaremos a ação do HTTPClient...neste caso apenas para teste.
        // Posteriormente será o endereço da api do Spring.
        // DESABILITADA CRIADA APENAS PRA TESTE: private readonly API = '/assets/courses.json';
        // AGORA VAMOS TRAZER AS INFORMAÇÕES DA API(CRUD-SPRING) GERADA PELO METHODO GET,
        //testada na ferramente thunder
        this.API = 'api/courses';
    }
    // listAll...pode-se dar o nome que desejar
    //  tranformado em um Observable chado listAll, resultado da chamada do HTTPCient
    CoursesService.prototype.listAll = function () {
        return this.httpClient.get(this.API).pipe(operators_1.first(), operators_1.delay(5000), operators_1.tap(function (courses) { return console.log(courses); }));
    };
    CoursesService.prototype.save = function (record) {
        return this.httpClient.post(this.API, record).pipe(operators_1.first());
    };
    CoursesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CoursesService);
    return CoursesService;
}());
exports.CoursesService = CoursesService;
