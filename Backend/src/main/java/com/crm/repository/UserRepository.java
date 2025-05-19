package com.crm.repository;

import com.crm.model.Role;
import com.crm.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository  extends JpaRepository<User, Integer>{
    Optional<User> findByEmail(String email);
    Boolean existsByEmail(String email);
    List<User> findByRole(Role role);
    @Query("SELECT COUNT(u) FROM User u WHERE u.role = 'CLIENT'")
    long countUsersWithClientRole();
    @Query("SELECT u.id FROM User u WHERE u.role = 'CLIENT'")
    List<Integer> findUserIdsWithClientRole();
}
