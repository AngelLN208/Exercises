import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { NuevaTareaComponent } from './components/nueva-tarea/nueva-tarea.component';
import { EditarTareaComponent } from './components/editar-tarea/editar-tarea.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'tareas', component: TareasComponent },
    { path: 'nueva-tarea', component: NuevaTareaComponent },
    { path: 'editar-tarea/:id', component: EditarTareaComponent },
    { path: '**', redirectTo: '' }
];