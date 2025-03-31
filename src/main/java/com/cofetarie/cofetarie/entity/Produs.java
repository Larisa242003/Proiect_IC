package com.cofetarie.cofetarie.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "produse")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Produs {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nume;
    
    @Column(columnDefinition = "TEXT")
    private String ingrediente;
    
    private Double pret;
    
    private String unitate;
    
    private String imagine;
}
