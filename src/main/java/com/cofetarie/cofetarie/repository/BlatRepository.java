package com.cofetarie.cofetarie.repository;

import com.cofetarie.cofetarie.entity.Blat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlatRepository extends JpaRepository<Blat, Long> {
}
