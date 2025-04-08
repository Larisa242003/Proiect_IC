package com.cofetarie.cofetarie.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "produse_predefinite")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class ProdusPredefinit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nume;

    @Column(columnDefinition = "TEXT")
    private String descriere;

    @Column(columnDefinition = "TEXT")
    private String ingrediente;

    private Double pret;

    private String unitate;

    private String imagine;

}
