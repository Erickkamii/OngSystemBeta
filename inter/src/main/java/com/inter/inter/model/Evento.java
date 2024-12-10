package com.inter.inter.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @ManyToOne
    @JoinColumn(name = "id_voluntario")
    private Voluntario voluntario;
    
    @ManyToOne
    @JoinColumn(name = "id_ong")
    private Ong ong;
    
    private String titulo;
    private String estado;
    private String cidade;
    private String descricao;
    private Date data;
    private int periodo;

    // Getters and Setters
}
