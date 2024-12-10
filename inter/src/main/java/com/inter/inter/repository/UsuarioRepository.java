package com.inter.inter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inter.inter.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}
