package com.inter.inter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inter.inter.model.Evento;

public interface EventoRepository extends JpaRepository<Evento, Integer> {
}
