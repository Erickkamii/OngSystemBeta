package com.inter.inter.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("Voluntario")
public class Voluntario extends Usuario {

    private String cpf;

    // Getters and Setters
}