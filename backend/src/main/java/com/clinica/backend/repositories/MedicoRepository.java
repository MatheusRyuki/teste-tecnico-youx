package com.clinica.backend.repositories;

import com.clinica.backend.models.Medico;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MedicoRepository extends MongoRepository<Medico, String> {
}
