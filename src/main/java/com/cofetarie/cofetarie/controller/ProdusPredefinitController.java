package com.cofetarie.cofetarie.controller;

import com.cofetarie.cofetarie.entity.*;
import com.cofetarie.cofetarie.service.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/produse-predefinite")
//@CrossOrigin(origins = "*") // Permite accesul din frontend
public class ProdusPredefinitController {

    @Autowired
    private ProdusPredefinitService produsPredefinitService;

    @GetMapping
    public List<ProdusPredefinit> getAllProdusePredefinite() {
        return produsPredefinitService.getAllProdusePredefinite();
    }

    @GetMapping("/{id}")
    public ProdusPredefinit getProdusPredefinitById(@PathVariable Integer id) {
        return produsPredefinitService.getProdusPredefinitById(id);
    }

    @PostMapping
    public ProdusPredefinit createProdusPredefinit(@RequestBody ProdusPredefinit produsPredefinit) {
        return produsPredefinitService.saveProdusPredefinit(produsPredefinit);
    }

    @DeleteMapping("/{id}")
    public void deleteProdusPredefinit(@PathVariable Integer id) {
        produsPredefinitService.deleteProdusPredefinit(id);
    }
}
