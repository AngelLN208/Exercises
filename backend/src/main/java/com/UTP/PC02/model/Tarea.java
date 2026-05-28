package com.UTP.PC02.model;

import lombok.Data;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import java.time.LocalDate;

@Data
@Entity
public class Tarea {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false)
    private String curso;

    @Column(nullable = false)
    private LocalDate fechaEntrega;

    @Column(nullable = false)
    private LocalDate fechaCreacion;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Estado estado;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Prioridad prioridad;

    // Método para establecer valores predeterminados antes de persistir la entidad 
    // La fecha de creación se autogenera y el estado se establece como PENDIENTE por defecto
    @PrePersist
    public void prePersist() {
        this.estado = Estado.PENDIENTE;
        this.fechaCreacion = LocalDate.now();
    }
}