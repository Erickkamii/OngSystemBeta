package com.inter.inter.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inter.inter.model.Ong;
import com.inter.inter.repository.OngRepository;

import java.util.List;
import java.util.Optional;

@Service
public class OngService {

    @Autowired
    private OngRepository ongRepository;

    public List<Ong> getAllOngs() {
        return ongRepository.findAll();
    }

    public Ong createOng(Ong ong) {
        return ongRepository.save(ong);
    }

    public Optional<Ong> getOngById(int id) {
        return ongRepository.findById(id);
    }

    public Ong updateOng(int id, Ong ong) {
        if (ongRepository.existsById(id)) {
            ong.setId(id);
            return ongRepository.save(ong);
        }
        return null;
    }

    public void deleteOng(int id) {
        ongRepository.deleteById(id);
    }
}
