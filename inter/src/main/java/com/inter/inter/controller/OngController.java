package com.inter.inter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.inter.inter.model.Ong;
import com.inter.inter.repository.OngRepository;

import java.util.List;

@RestController
@RequestMapping("/ongs")
public class OngController {

    @Autowired
    private OngRepository ongRepository;

    @GetMapping
    public List<Ong> getAllOngs() {
        return ongRepository.findAll();
    }

    @PostMapping
    public Ong createOng(@RequestBody Ong ong) {
        return ongRepository.save(ong);
    }

    @GetMapping("/{id}")
    public Ong getOngById(@PathVariable int id) {
        return ongRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Ong updateOng(@PathVariable int id, @RequestBody Ong ong) {
        if (ongRepository.existsById(id)) {
            ong.setId(id);
            return ongRepository.save(ong);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteOng(@PathVariable int id) {
        ongRepository.deleteById(id);
    }
}
