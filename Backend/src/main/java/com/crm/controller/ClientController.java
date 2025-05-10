package com.crm.controller;

import com.crm.model.Admin;
import com.crm.model.Client;
import com.crm.service.AdminService;
import com.crm.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import lombok.RequiredArgsConstructor;

import java.util.List;


@RestController
@RequestMapping("api/client")
@RequiredArgsConstructor
public class ClientController {

    private final ClientService clientRepository ;

    @PostMapping("")
    public ResponseEntity<Client> create(@RequestBody Client dto){
        Client response = clientRepository.create(dto);
        return new ResponseEntity<Client>(response, HttpStatus.OK);

    }

    @GetMapping("/with-contrats")
    public ResponseEntity<List<Client>> getClientsWithContrats() {
        List<Client> clients = clientRepository.findClientsWithContrats();
        return ResponseEntity.ok(clients);
    }
}
