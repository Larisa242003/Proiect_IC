package com.cofetarie.cofetarie.repository;

import com.cofetarie.cofetarie.entity.Glazura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface GlazuraRepository extends JpaRepository<Glazura, Long> {
}
