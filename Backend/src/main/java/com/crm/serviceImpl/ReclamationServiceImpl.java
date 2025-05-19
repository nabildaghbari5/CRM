package com.crm.serviceImpl;

import com.crm.exception.NotFoundException;
import com.crm.model.Client;
import com.crm.model.Commercial;
import com.crm.model.Reclamation;
import com.crm.model.RendezVous;
import com.crm.repository.ClientRepository;
import com.crm.repository.ReclamationRepository;
import com.crm.service.Reclamationservice;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReclamationServiceImpl implements Reclamationservice {

    private final ReclamationRepository reclamationRepository ;
    private final ClientRepository clientRepository ;
    @Override
    public Reclamation create(Reclamation dto ) {
        return reclamationRepository.save(dto);
    }

    @Override
    public Reclamation save(Reclamation reclamation, Integer clientId) {
        Client client = clientRepository.findById(clientId)
                .orElseThrow(()-> new IllegalArgumentException("client not foudn"));
        reclamation.setClient(client);
        reclamation.setDateEnvoi(LocalDateTime.now());
        reclamation.setStatut("En attente");
        return reclamationRepository.save(reclamation);
    }

    @Override
    public Reclamation update(Integer id, Reclamation dto) throws NotFoundException {
        Reclamation reclamation = reclamationRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Rendezz-vous not found by id " + id));
        reclamation.setMessage(dto.getMessage());
        reclamation.setObjet(dto.getObjet());

        return reclamationRepository.save(reclamation);
    }

    @Override
    public Reclamation findById(Integer id) throws NotFoundException {
        return reclamationRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Rendezz-vous not found by id " + id));
    }

    @Override
    public List<Reclamation> findAll() {
        return reclamationRepository.findAll();
    }

    @Override
    public void delete(Integer id) throws NotFoundException {
        reclamationRepository.deleteById(id);
    }


    @Override
    public List<Reclamation> getReclamationByClientId(Integer clientId) {
        return reclamationRepository.findByClientId(clientId);
    }

    @Override
    public List<Reclamation> getReclamationByCommercialId(Integer commercialId) {
        return null ;
    }

    @Override
    public Reclamation  updateStatusCommercial(Integer reclamationId, String status) {
        Reclamation reclamation = this.reclamationRepository.findById(reclamationId)
                .orElseThrow();
        reclamation.setStatut(status);
        return reclamationRepository.save(reclamation);
    }

    public List<Reclamation> getReclamationByClientIdAndCommercialId(Integer clientId, Integer commercialId) {
        return null;
    }


    /***
     *
     * @param rendezVoudId
     * @param status
     * @return
     * @throws NotFoundException


     @Override
     public Reclamation updateStatusCommercial(Integer rendezVoudId, String status) throws NotFoundException {
     Reclamation rendezVous = reclamationRepository.findById(rendezVoudId)
     .orElseThrow(() -> new NotFoundException("Reclamation with ID " + rendezVoudId + " not found"));

     rendezVous.setStatus(status);
     return reclamationRepository.save(rendezVous);
     }*
     */
}
