package com.clinica.backend.repositories;

import com.clinica.backend.models.Enfermeiro;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EnfermeiroRepository extends MongoRepository<Enfermeiro, String> {
}
