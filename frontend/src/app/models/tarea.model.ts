export interface Tarea {
    id?: number;
    titulo: string;
    curso: string;
    fechaEntrega: string;
    fechaInicio?: string;
    estado?: string;
    prioridad: string;
}