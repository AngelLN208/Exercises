import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';

@Component({
    selector: 'app-nueva-tarea',
    imports: [FormsModule],
    templateUrl: './nueva-tarea.component.html',
    styleUrl: './nueva-tarea.component.css'
})
export class NuevaTareaComponent {

    mensaje: string = '';
    exito: boolean = false;

    tarea: Tarea = {
        titulo: '',
        curso: '',
        fechaEntrega: '',
        prioridad: ''
    };

    constructor(private tareaService: TareaService, private router: Router) {}

    onSubmit() {
        if (!this.tarea.titulo || !this.tarea.curso || !this.tarea.fechaEntrega || !this.tarea.prioridad) {
              this.exito = false;
              this.mensaje = 'Por favor completa todos los campos';
              return;
          }
        this.tareaService.createTarea(this.tarea).subscribe({
          
            next: () => {
                alert('✅ Tarea creada exitosamente');
                this.router.navigate(['/tareas']);
            },
            error: (err) => {
                this.exito = false;
                if (err.error?.errors) {
                    this.mensaje = err.error.errors.map((e: any) => e.defaultMessage).join(', ');
                } else {
                    this.mensaje = 'Error al crear la tarea';
                }
            }
        });
    }
}