package com.cofetarie.cofetarie.controller;

import com.cofetarie.cofetarie.service.*;
import com.cofetarie.cofetarie.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produse")
@CrossOrigin(origins = "*") // Permite accesul din frontend
public class ProdusController {

    @Autowired
    private ProdusService produsService;

    @GetMapping
    public List<Produs> getAllProduse() {
        return produsService.getAllProduse();
    }

    @GetMapping("/{id}")
    public Produs getProdusById(@PathVariable Long id) {
        return produsService.getProdusById(id);
    }

    @PostMapping
    public Produs createProdus(@RequestBody Produs produs) {
        return produsService.saveProdus(produs);
    }

    @DeleteMapping("/{id}")
    public void deleteProdus(@PathVariable Long id) {
        produsService.deleteProdus(id);
    }
}
