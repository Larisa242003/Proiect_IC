package com.cofetarie.cofetarie.repository;

import com.cofetarie.cofetarie.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdusPredefinitRepository extends JpaRepository<ProdusPredefinit, Integer> {
    // Poți adăuga metode custom dacă vrei: findByNume(), etc.
}
