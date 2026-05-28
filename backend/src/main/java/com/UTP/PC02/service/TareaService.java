package com.UTP.PC02.service;

import com.UTP.PC02.model.Tarea;
import com.UTP.PC02.repository.TareaRepository;
import com.UTP.PC02.dto.TareaDTO;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TareaService {
    
    @Autowired
    private TareaRepository tareaRepository;

    public List<Tarea> getAllTareas() {
        return tareaRepository.findAll();
    }

    public Tarea createTarea(TareaDTO dto) {
        Tarea tarea = new Tarea();
        tarea.setTitulo(dto.getTitulo());
        tarea.setCurso(dto.getCurso());
        tarea.setFechaEntrega(dto.getFechaEntrega());
        tarea.setPrioridad(dto.getPrioridad());
        // estado y fechaInicio se asignan solos con @PrePersist
        return tareaRepository.save(tarea);
    }

    public void deleteTarea(Long id) {
        tareaRepository.deleteById(id);
    }

    public Tarea updateTarea(Long id, TareaDTO dto) {
        Tarea tarea = tareaRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Tarea no encontrada"));
        
        tarea.setTitulo(dto.getTitulo());
        tarea.setCurso(dto.getCurso());
        tarea.setFechaEntrega(dto.getFechaEntrega());
        tarea.setEstado(dto.getEstado());
        tarea.setPrioridad(dto.getPrioridad());
        
        return tareaRepository.save(tarea);
    }

    public Tarea getTareaById(Long id) {
        return tareaRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Tarea no encontrada"));
    }
}
