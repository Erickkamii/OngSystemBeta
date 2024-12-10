package com.inter.inter.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inter.inter.model.Habilidade;
import com.inter.inter.repository.HabilidadeRepository;

import java.util.List;
import java.util.Optional;

@Service
public class HabilidadeService {

    @Autowired
    private HabilidadeRepository habilidadeRepository;

    public List<Habilidade> getAllHabilidades() {
        return habilidadeRepository.findAll();
    }

    public Habilidade createHabilidade(Habilidade habilidade) {
        return habilidadeRepository.save(habilidade);
    }

    public Optional<Habilidade> getHabilidadeById(int id) {
        return habilidadeRepository.findById(id);
    }

    public Habilidade updateHabilidade(int id, Habilidade habilidade) {
        if (habilidadeRepository.existsById(id)) {
            habilidade.setId(id);
            return habilidadeRepository.save(habilidade);
        }
        return null;
    }

    public void deleteHabilidade(int id) {
        habilidadeRepository.deleteById(id);
    }
}
