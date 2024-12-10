package com.inter.inter.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class VoluntarioHabilidade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String nivel;

    @ManyToOne
    @JoinColumn(name = "id_voluntario")
    private Voluntario voluntario;

    @ManyToOne
    @JoinColumn(name = "id_habilidade")
    private Habilidade habilidade;

    // Getters and Setters
}
