package com.crm.service;

import com.crm.model.Reclamation;
import com.crm.model.RendezVous;

import java.util.List;

public interface Reclamationservice extends BaseService<Reclamation, Integer>{
    Reclamation save(Reclamation reclamation, Integer clientId);

    List<Reclamation> getReclamationByClientId(Integer clientId);

    List<Reclamation> getReclamationByCommercialId(Integer commercialId);

    Reclamation updateStatusCommercial(Integer reclamationId, String status);
}
