package com.UTP.PC02.controller;

import com.UTP.PC02.model.Tarea;
import com.UTP.PC02.service.TareaService;

import jakarta.validation.Valid;

import com.UTP.PC02.dto.TareaDTO;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/tareas")    
public class TareaController {
    
    @Autowired
    private TareaService tareaService;

    @GetMapping
    public List<Tarea> getAllTareas() {
        return tareaService.getAllTareas();
    }

    @PostMapping
    public Tarea createTarea(@RequestBody @Valid TareaDTO dto) {
        return tareaService.createTarea(dto);
    }

    @DeleteMapping("/{id}")
    public void deleteTarea(@PathVariable Long id) {
        tareaService.deleteTarea(id);
    }

    @PutMapping("/{id}")
    public Tarea updateTarea(@PathVariable Long id, @RequestBody @Valid TareaDTO dto) {
        return tareaService.updateTarea(id, dto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tarea> getTareaById(@PathVariable Long id) {
        return ResponseEntity.ok(tareaService.getTareaById(id));
    }
}
