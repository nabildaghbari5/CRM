package com.crm.serviceImpl;

import com.crm.model.Client;
import com.crm.model.DashboardStatsDto;
import com.crm.repository.ClientRepository;
import com.crm.repository.ContratRepository;
import com.crm.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final UserRepository userRepository;
    private final ClientRepository clientRepository;
    private final ContratRepository contratRepository;

    public DashboardStatsDto getDashboardStats() {
        DashboardStatsDto dto = new DashboardStatsDto();

        // Tous les users avec le rôle CLIENT
        List<Integer> allClientRoleUserIds = userRepository.findUserIdsWithClientRole();

        // Ceux qui ont un contrat via l'entité Client
        List<Integer> userIdsWithContrats = clientRepository.findUserIdsWithContrats();

        // Clients = Users avec contrat
        long nombreClients = allClientRoleUserIds.stream()
                .filter(userIdsWithContrats::contains)
                .count();

        // Prospects = Users sans contrat
        long nombreProspects = allClientRoleUserIds.size() - nombreClients;

        dto.setNombreClients(nombreClients);
        dto.setNombreProspects(nombreProspects);

        dto.setNombreContrats(contratRepository.count());

        BigDecimal caisse = contratRepository.sumMontant();
        dto.setCaisse(caisse != null ? caisse : BigDecimal.ZERO);

        return dto;
    }
}
