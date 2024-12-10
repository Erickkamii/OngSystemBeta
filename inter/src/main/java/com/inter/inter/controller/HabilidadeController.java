package com.inter.inter.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.inter.inter.model.Habilidade;
import com.inter.inter.repository.HabilidadeRepository;

import java.util.List;

@RestController
@RequestMapping("/habilidades")
public class HabilidadeController {

    @Autowired
    private HabilidadeRepository habilidadeRepository;

    @GetMapping
    public List<Habilidade> getAllHabilidades() {
        return habilidadeRepository.findAll();
    }

    @PostMapping
    public Habilidade createHabilidade(@RequestBody Habilidade habilidade) {
        return habilidadeRepository.save(habilidade);
    }

    @GetMapping("/{id}")
    public Habilidade getHabilidadeById(@PathVariable int id) {
        return habilidadeRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Habilidade updateHabilidade(@PathVariable int id, @RequestBody Habilidade habilidade) {
        if (habilidadeRepository.existsById(id)) {
            habilidade.setId(id);
            return habilidadeRepository.save(habilidade);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteHabilidade(@PathVariable int id) {
        habilidadeRepository.deleteById(id);
    }
}

