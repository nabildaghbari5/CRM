package com.crm.service;

import com.crm.model.Client;
import com.crm.model.Contrat;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClientService extends BaseService<Client, Integer> {


    List<Client> findClientsWithContrats();
}
