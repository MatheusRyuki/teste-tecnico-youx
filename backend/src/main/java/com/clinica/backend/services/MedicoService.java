package com.clinica.backend.services;

import com.clinica.backend.models.Medico;
import com.clinica.backend.repositories.MedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicoService {
    @Autowired
    private MedicoRepository medicoRepository;

    public List<Medico> findAll() {
        return medicoRepository.findAll();
    }

    public Medico save(Medico medico) {
        return medicoRepository.save(medico);
    }
}
