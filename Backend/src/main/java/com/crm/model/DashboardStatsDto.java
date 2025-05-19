package com.crm.model;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class DashboardStatsDto {
    private long nombreClients;
    private long nombreProspects;
    private long nombreContrats;
    private BigDecimal caisse;

    // Getters and setters
}