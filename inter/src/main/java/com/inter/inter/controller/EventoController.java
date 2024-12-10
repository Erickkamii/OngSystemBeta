package com.inter.inter.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.inter.inter.model.Evento;
import com.inter.inter.repository.EventoRepository;

import java.util.List;

@RestController
@RequestMapping("/eventos")
public class EventoController {

    @Autowired
    private EventoRepository eventoRepository;

    @GetMapping
    public List<Evento> getAllEventos() {
        return eventoRepository.findAll();
    }

    @PostMapping
    public Evento createEvento(@RequestBody Evento evento) {
        return eventoRepository.save(evento);
    }

    @GetMapping("/{id}")
    public Evento getEventoById(@PathVariable int id) {
        return eventoRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Evento updateEvento(@PathVariable int id, @RequestBody Evento evento) {
        if (eventoRepository.existsById(id)) {
            evento.setId(id);
            return eventoRepository.save(evento);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteEvento(@PathVariable int id) {
        eventoRepository.deleteById(id);
    }
}
