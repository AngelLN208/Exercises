import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TareaService {

    private apiUrl = `${environment.apiUrl}/tareas`;

    constructor(private http: HttpClient) {}

    getTareas(): Observable<Tarea[]> {
        return this.http.get<Tarea[]>(this.apiUrl);
    }

    getTareaById(id: number): Observable<Tarea> {
        return this.http.get<Tarea>(`${this.apiUrl}/${id}`);
    }

    createTarea(tarea: Tarea): Observable<Tarea> {
        return this.http.post<Tarea>(this.apiUrl, tarea);
    }

    updateTarea(id: number, tarea: Tarea): Observable<Tarea> {
        return this.http.put<Tarea>(`${this.apiUrl}/${id}`, tarea);
    }

    deleteTarea(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}