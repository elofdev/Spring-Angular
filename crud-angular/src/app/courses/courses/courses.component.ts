import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;


  // Injeção de Dependência forma 1 passo 1
  //  coursesService: CoursesService;
  //-----------------------

  // Injeção de Dependência forma 2 passo 1 - direto no contrutor
  constructor (
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Injeção de Dependência forma 1 passo 2
    //this.coursesService = new CoursesService();
    // Injeção de Dependência forma 1 passo 3
    this.courses$ = this.coursesService.listAll().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar a lista de cursos.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new'],{relativeTo:this.route});
  }
  onEdit() {
    console.log('onEdit');
  }

}
