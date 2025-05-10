package com.cofetarie.cofetarie.repository;

import com.cofetarie.cofetarie.entity.Crema;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CremaRepository extends JpaRepository<Crema, Long> {
}

