package com.clinica.backend.models;

import jakarta.persistence.*;

@Entity
public class Enfermeiro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String cpf;
    private String senha;
}
