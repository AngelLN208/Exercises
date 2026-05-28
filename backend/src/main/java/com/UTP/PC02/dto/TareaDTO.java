package com.UTP.PC02.dto;

import java.time.LocalDate;

import com.UTP.PC02.model.Estado;
import com.UTP.PC02.model.Prioridad;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class TareaDTO {
    @NotBlank(message = "El título es obligatorio")
    private String titulo;

    @NotBlank(message = "El curso es obligatorio")
    private String curso;

    @NotNull(message = "La fecha es obligatoria")
    @Future(message = "La fecha de entrega debe ser futura")
    private LocalDate fechaEntrega;

    @NotNull(message = "La prioridad es obligatoria")
    private Prioridad prioridad;

    @NotNull(message = "El estado es obligatorio")
    private Estado estado;
}
