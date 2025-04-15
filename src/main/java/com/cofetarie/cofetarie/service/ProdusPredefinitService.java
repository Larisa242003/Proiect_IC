package com.cofetarie.cofetarie.service;

import com.cofetarie.cofetarie.entity.*;
import com.cofetarie.cofetarie.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProdusPredefinitService {

    @Autowired
    private ProdusPredefinitRepository produsPredefinitRepository;

    public List<ProdusPredefinit> getAllProdusePredefinite() {
        return produsPredefinitRepository.findAll();
    }

    public ProdusPredefinit getProdusPredefinitById(Integer id) {
        return produsPredefinitRepository.findById(id).orElse(null);
    }

    public ProdusPredefinit saveProdusPredefinit(ProdusPredefinit produsPredefinit) {
        return produsPredefinitRepository.save(produsPredefinit);
    }

    public void deleteProdusPredefinit(Integer id) {
        produsPredefinitRepository.deleteById(id);
    }
}