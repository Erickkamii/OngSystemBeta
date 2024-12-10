package com.inter.inter.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Doacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @ManyToOne
    @JoinColumn(name = "id_ong")
    private Ong ong;
    
    @ManyToOne
    @JoinColumn(name = "id_voluntario")
    private Voluntario voluntario;
    
    private double valor;
    private Date dataDoacao;

    // Getters and Setters
    
}
