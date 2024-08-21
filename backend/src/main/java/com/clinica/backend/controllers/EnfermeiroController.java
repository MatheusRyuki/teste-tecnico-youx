package com.clinica.backend.controllers;

import com.clinica.backend.models.Enfermeiro;
import com.clinica.backend.services.EnfermeiroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enfermeiros")
public class EnfermeiroController {
    @Autowired
    private EnfermeiroService enfermeiroService;

    @GetMapping
    public List<Enfermeiro> getAllEnfermeiros() {
        return enfermeiroService.findAll();
    }

    @PostMapping
    public Enfermeiro createEnfermeiro(@RequestBody Enfermeiro enfermeiro) {
        return enfermeiroService.save(enfermeiro);
    }
}
