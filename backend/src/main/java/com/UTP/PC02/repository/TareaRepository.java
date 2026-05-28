package com.UTP.PC02.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.UTP.PC02.model.Tarea;

@Repository
public interface TareaRepository extends JpaRepository<Tarea, Long> {
    
}
