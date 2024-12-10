package com.inter.inter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.inter.inter.model.Doacao;
import com.inter.inter.repository.DoacaoRepository;

import java.util.List;

@RestController
@RequestMapping("/doacoes")
public class DoacaoController {

    @Autowired
    private DoacaoRepository doacaoRepository;

    @GetMapping
    public List<Doacao> getAllDoacoes() {
        return doacaoRepository.findAll();
    }

    @PostMapping
    public Doacao createDoacao(@RequestBody Doacao doacao) {
        return doacaoRepository.save(doacao);
    }

    @GetMapping("/{id}")
    public Doacao getDoacaoById(@PathVariable int id) {
        return doacaoRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Doacao updateDoacao(@PathVariable int id, @RequestBody Doacao doacao) {
        if (doacaoRepository.existsById(id)) {
            doacao.setId(id);
            return doacaoRepository.save(doacao);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteDoacao(@PathVariable int id) {
        doacaoRepository.deleteById(id);
    }
}
