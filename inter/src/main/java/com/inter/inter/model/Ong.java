package com.inter.inter.model;


import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorColumn("Ong")
public class Ong extends Usuario {

    private String cnpj;
    private String descricao;

    // Getters and Setters
}
