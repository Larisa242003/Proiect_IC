package com.cofetarie.cofetarie.controller;

import com.cofetarie.cofetarie.entity.*;
import com.cofetarie.cofetarie.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/construite")
@CrossOrigin(origins = "http://localhost:3000")
public class ProdusConstruitController {

    @Autowired
    private BlatRepository blatRepository;

    @Autowired
    private CremaRepository cremaRepository;

    @Autowired
    private GlazuraRepository glazuraRepository;

    @Autowired
    private InsertieRepository insertieRepository;

    @GetMapping("/blaturi")
    public List<Blat> getBlaturi() {
        return blatRepository.findAll();
    }

    @GetMapping("/creme")
    public List<Crema> getCreme() {
        return cremaRepository.findAll();
    }

    @GetMapping("/glazuri")
    public List<Glazura> getGlazuri() {
        return glazuraRepository.findAll();
    }

    @GetMapping("/insertii")
    public List<Insertie> getInsertii() {
        return insertieRepository.findAll();
    }
}
