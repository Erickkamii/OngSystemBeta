package com.inter.inter.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inter.inter.model.Doacao;
import com.inter.inter.repository.DoacaoRepository;

import java.util.List;
import java.util.Optional;

@Service
public class DoacaoService {

    @Autowired
    private DoacaoRepository doacaoRepository;

    public List<Doacao> getAllDoacoes() {
        return doacaoRepository.findAll();
    }

    public Doacao createDoacao(Doacao doacao) {
        return doacaoRepository.save(doacao);
    }

    public Optional<Doacao> getDoacaoById(int id) {
        return doacaoRepository.findById(id);
    }

    public Doacao updateDoacao(int id, Doacao doacao) {
        if (doacaoRepository.existsById(id)) {
            doacao.setId(id);
            return doacaoRepository.save(doacao);
        }
        return null;
    }

    public void deleteDoacao(int id) {
        doacaoRepository.deleteById(id);
    }
}
