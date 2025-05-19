package com.crm.repository;

import com.crm.model.Reclamation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReclamationRepository extends JpaRepository<Reclamation , Integer> {
    List<Reclamation> findByClientId(Integer clientId);
}
