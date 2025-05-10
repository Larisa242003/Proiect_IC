package com.cofetarie.cofetarie.repository;

import com.cofetarie.cofetarie.entity.Insertie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface InsertieRepository extends JpaRepository<Insertie, Long> {
}
