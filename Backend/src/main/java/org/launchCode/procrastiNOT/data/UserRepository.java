package org.launchCode.procrastiNOT.data;

import org.launchCode.procrastiNOT.models.User;
import org.springframework.data.repository.CrudRepository;

// Interface extending CrudRepository to perform CRUD operations on User entities
public interface UserRepository extends CrudRepository<User, Integer> {

    // Method signature to find a user by their username
    User findByUsername(String username);

    // Method signature to find a user by their email
    User findByEmail(String email);
}
