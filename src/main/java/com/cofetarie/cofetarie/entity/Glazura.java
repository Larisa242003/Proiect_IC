package com.cofetarie.cofetarie.entity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Table(name = "glazuri")
public class Glazura {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nume;

    @Column(columnDefinition = "TEXT")
    private String descriere;

    private Double pret;

    private String imagine;
}