package com.clinica.backend.repositories;

import com.clinica.backend.models.Enfermeiro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnfermeiroRepository extends JpaRepository<Enfermeiro, Long> {
}