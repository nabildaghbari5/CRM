package com.crm.repository;

import com.crm.model.Contrat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface ContratRepository extends JpaRepository<Contrat, Integer> {

    // Méthode pour récupérer les contrats par clientId
    List<Contrat> findByClientId(Integer clientId);

    // Méthode pour récupérer les contrats par commercialId
    List<Contrat> findByCommercialId(Integer commercialId);

    List<Contrat> findByStatutAndCommercialId(String statut, Integer commercialId);

    @Query("SELECT SUM(c.montant) FROM Contrat c")
    BigDecimal sumMontant();



}
