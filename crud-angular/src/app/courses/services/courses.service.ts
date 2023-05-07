import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, delay, tap } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})

export class CoursesService {
  // Uri do LOCAL/CAMINHO de onde será obtido a infoemação
  // ou pra onde direcionaremos a ação do HTTPClient...neste caso apenas para teste.
  // Posteriormente será o endereço da api do Spring.
  // DESABILITADA CRIADA APENAS PRA TESTE: private readonly API = '/assets/courses.json';

  // AGORA VAMOS TRAZER AS INFORMAÇÕES DA API(CRUD-SPRING) GERADA PELO METHODO GET,
  //testada na ferramente thunder

   private readonly API = 'api/courses';
  //private readonly API = 'assets/courses.json';


  /* Apenas de passar o "private httpCliente:HttpCliente" para o construtor o Angular fornece automaticamente
 o httpCliente para nós é o que chama-mos de Injeção de dependência.
 ou seja dizendo pro Angular que precisamos de uma instancia do HttpCliente e a maneira de fazermos
  isso é através da declaração no construtor */
  constructor(private httpClient: HttpClient) {}

  // listAll...pode-se dar o nome que desejar
  //  tranformado em um Observable chado listAll, resultado da chamada do HTTPCient
  listAll() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(5000),
      tap((courses) => console.log(courses))
    );
  }
}
