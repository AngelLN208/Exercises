import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-editar-tarea',
    imports: [FormsModule, CommonModule, RouterLink],
    templateUrl: './editar-tarea.component.html',
    styleUrl: './editar-tarea.component.css'
})
export class EditarTareaComponent implements OnInit {
    mensaje: string = '';
    exito: boolean = false;
    tarea: Tarea = {
        titulo: '',
        curso: '',
        fechaEntrega: '',
        prioridad: '',
        estado: ''
    };

    constructor(
        private tareaService: TareaService,
        private route: ActivatedRoute,
        private router: Router,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.tareaService.getTareaById(Number(id)).subscribe({
                next: (data) => {
                    this.tarea = data;
                    this.cdr.detectChanges();
                },
                error: (err) => console.error(err)
            });
        }
    }

    onSubmit() {
          if (!this.tarea.titulo || !this.tarea.curso || !this.tarea.fechaEntrega || !this.tarea.prioridad || !this.tarea.estado) {
              this.exito = false;
              this.mensaje = 'Por favor completa todos los campos';
              return;
          }
        this.tareaService.updateTarea(this.tarea.id!, this.tarea).subscribe({
            next: () => {
                alert('Tarea actualizada exitosamente');
                this.router.navigate(['/tareas']);
            },
            error: (err) => {
                this.exito = false;
                if (err.error?.errors) {
                    this.mensaje = err.error.errors.map((e: any) => e.defaultMessage).join(', ');
                } else {
                    this.mensaje = 'Error al actualizar la tarea';
                }
            }
        });
    }
}