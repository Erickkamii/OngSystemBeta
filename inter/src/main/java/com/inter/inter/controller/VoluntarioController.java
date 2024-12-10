package com.inter.inter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import com.inter.inter.model.Voluntario;
import com.inter.inter.repository.VoluntarioRepository;

import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/voluntarios")
public class VoluntarioController {

    @Autowired
    private VoluntarioRepository voluntarioRepository;

    @GetMapping
    public List<Voluntario> getAllVoluntarios() {
        return voluntarioRepository.findAll();
    }

    @PostMapping
    public Voluntario createVoluntario(@RequestBody Voluntario voluntario) {
        return voluntarioRepository.save(voluntario);
    }

    @GetMapping("/{id}")
    public Voluntario getVoluntarioById(@PathVariable int id) {
        return voluntarioRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Voluntario updateVoluntario(@PathVariable int id, @RequestBody Voluntario voluntario) {
        if (voluntarioRepository.existsById(id)) {
            voluntario.setId(id);
            return voluntarioRepository.save(voluntario);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteVoluntario(@PathVariable int id) {
        voluntarioRepository.deleteById(id);
    }
}
