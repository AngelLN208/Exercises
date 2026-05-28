
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-tareas',
    imports: [RouterLink, CommonModule, DatePipe],
    templateUrl: './tareas.component.html',
    styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit {

    tareas: Tarea[] = [];

    constructor(private tareaService: TareaService,private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        console.log('ngOnInit ejecutado');
        this.cargarTareas();
    }

    cargarTareas() {
        this.tareaService.getTareas().subscribe({
            next: (data) => {
                this.tareas = data;
                this.cdr.detectChanges();  // fuerza actualización
            },
            error: (err) => console.error(err)
        });
    }

    eliminar(id: number) {
        if (confirm('¿Estás seguro de eliminar esta tarea?')) {
            this.tareaService.deleteTarea(id).subscribe({
                next: () => this.cargarTareas(),
                error: (err) => console.error(err)
            });
        }
    }

    esVencida(tarea: Tarea): boolean {
        return tarea.estado === 'VENCIDO';
    }

    esUrgente(tarea: Tarea): boolean {
        return tarea.prioridad === 'ALTA' && tarea.estado === 'PENDIENTE';
    }

    
}