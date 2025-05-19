package com.crm.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Reclamation {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id ;
    private String objet;

    @Column(length = 1000)
    private String message;

    private LocalDateTime dateEnvoi;

    private String statut; // exemple : "EN_ATTENTE", "TRAITEE", etc.

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;


}
