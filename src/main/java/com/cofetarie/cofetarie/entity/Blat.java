package com.cofetarie.cofetarie.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "blaturi")
public class Blat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nume;

    @Column(columnDefinition = "TEXT")
    private String descriere;

    private Double pret;

    private String imagine;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getNume() { return nume; }
    public void setNume(String nume) { this.nume = nume; }
    public String getDescriere() { return descriere; }
    public void setDescriere(String descriere) { this.descriere = descriere; }
    public Double getPret() { return pret; }
    public void setPret(Double pret) { this.pret = pret; }
    public String getImagine() { return imagine; }
    public void setImagine(String imagine) { this.imagine = imagine; }
}
