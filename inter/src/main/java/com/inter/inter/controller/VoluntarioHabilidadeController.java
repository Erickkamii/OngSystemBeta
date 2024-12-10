package com.inter.inter.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.inter.inter.model.VoluntarioHabilidade;
import com.inter.inter.repository.VoluntarioHabilidadeRepository;

import java.util.List;

@RestController
@RequestMapping("/voluntarios-habilidades")
public class VoluntarioHabilidadeController {

    @Autowired
    private VoluntarioHabilidadeRepository voluntarioHabilidadeRepository;

    @GetMapping
    public List<VoluntarioHabilidade> getAllVoluntariosHabilidades() {
        return voluntarioHabilidadeRepository.findAll();
    }

    @PostMapping
    public VoluntarioHabilidade createVoluntarioHabilidade(@RequestBody VoluntarioHabilidade voluntarioHabilidade) {
        return voluntarioHabilidadeRepository.save(voluntarioHabilidade);
    }

    @GetMapping("/{id}")
    public VoluntarioHabilidade getVoluntarioHabilidadeById(@PathVariable int id) {
        return voluntarioHabilidadeRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public VoluntarioHabilidade updateVoluntarioHabilidade(@PathVariable int id, @RequestBody VoluntarioHabilidade voluntarioHabilidade) {
        if (voluntarioHabilidadeRepository.existsById(id)) {
            voluntarioHabilidade.setId(id);
            return voluntarioHabilidadeRepository.save(voluntarioHabilidade);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteVoluntarioHabilidade(@PathVariable int id) {
        voluntarioHabilidadeRepository.deleteById(id);
    }
}
