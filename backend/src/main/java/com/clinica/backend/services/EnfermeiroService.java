package com.clinica.backend.services;

import com.clinica.backend.models.Enfermeiro;
import com.clinica.backend.repositories.EnfermeiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnfermeiroService {
    @Autowired
    private EnfermeiroRepository enfermeiroRepository;

    public List<Enfermeiro> findAll() {
        return enfermeiroRepository.findAll();
    }

    public Enfermeiro save(Enfermeiro enfermeiro) {
        return enfermeiroRepository.save(enfermeiro);
    }
}
