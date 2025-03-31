package com.cofetarie.cofetarie.service;

import com.cofetarie.cofetarie.entity.*;
import com.cofetarie.cofetarie.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProdusService {

    @Autowired
    private ProdusRepository produsRepository;

    public List<Produs> getAllProduse() {
        return produsRepository.findAll();
    }

    public Produs getProdusById(Long id) {
        return produsRepository.findById(id).orElse(null);
    }

    public Produs saveProdus(Produs produs) {
        return produsRepository.save(produs);
    }

    public void deleteProdus(Long id) {
        produsRepository.deleteById(id);
    }
}
