package com.crm.repository;

import com.crm.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {

    @Query("SELECT DISTINCT c FROM Client c JOIN Contrat ct ON ct.client = c")
    List<Client> findClientsWithContrats();

    @Query("SELECT DISTINCT c.user.id FROM Client c JOIN c.contrats ctr")
    List<Integer> findUserIdsWithContrats();
}
