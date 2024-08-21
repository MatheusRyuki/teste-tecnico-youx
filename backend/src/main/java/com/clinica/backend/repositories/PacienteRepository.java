package com.clinica.backend.repositories;

import com.clinica.backend.models.Paciente;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PacienteRepository extends MongoRepository<Paciente, String> {
}
