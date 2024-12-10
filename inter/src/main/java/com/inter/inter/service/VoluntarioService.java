package com.inter.inter.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inter.inter.model.Voluntario;
import com.inter.inter.repository.VoluntarioRepository;

import java.util.List;
import java.util.Optional;

@Service
public class VoluntarioService {

    @Autowired
    private VoluntarioRepository voluntarioRepository;

    public List<Voluntario> getAllVoluntarios() {
        return voluntarioRepository.findAll();
    }

    public Voluntario createVoluntario(Voluntario voluntario) {
        return voluntarioRepository.save(voluntario);
    }

    public Optional<Voluntario> getVoluntarioById(int id) {
        return voluntarioRepository.findById(id);
    }

    public Voluntario updateVoluntario(int id, Voluntario voluntario) {
        if (voluntarioRepository.existsById(id)) {
            voluntario.setId(id);
            return voluntarioRepository.save(voluntario);
        }
        return null;
    }

    public void deleteVoluntario(int id) {
        voluntarioRepository.deleteById(id);
    }
}
