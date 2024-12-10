package com.inter.inter.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inter.inter.model.VoluntarioHabilidade;
import com.inter.inter.repository.VoluntarioHabilidadeRepository;

import java.util.List;
import java.util.Optional;

@Service
public class VoluntarioHabilidadeService {

    @Autowired
    private VoluntarioHabilidadeRepository voluntarioHabilidadeRepository;

    public List<VoluntarioHabilidade> getAllVoluntariosHabilidades() {
        return voluntarioHabilidadeRepository.findAll();
    }

    public VoluntarioHabilidade createVoluntarioHabilidade(VoluntarioHabilidade voluntarioHabilidade) {
        return voluntarioHabilidadeRepository.save(voluntarioHabilidade);
    }

    public Optional<VoluntarioHabilidade> getVoluntarioHabilidadeById(int id) {
        return voluntarioHabilidadeRepository.findById(id);
    }

    public VoluntarioHabilidade updateVoluntarioHabilidade(int id, VoluntarioHabilidade voluntarioHabilidade) {
        if (voluntarioHabilidadeRepository.existsById(id)) {
            voluntarioHabilidade.setId(id);
            return voluntarioHabilidadeRepository.save(voluntarioHabilidade);
        }
        return null;
    }

    public void deleteVoluntarioHabilidade(int id) {
        voluntarioHabilidadeRepository.deleteById(id);
    }
}
