package org.launchCode.procrastiNOT.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;

import java.util.Objects;

// An abstract class serving as the base entity for other entities in the application
@MappedSuperclass
public abstract class AbstractEntity {
    // Entity's unique identifier, automatically generated using GenerationType.IDENTITY
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // Getter method for retrieving the entity's ID
    public int getId() {
        return id;
    }

    // Override of the equals method to compare entities based on their IDs
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AbstractEntity that = (AbstractEntity) o;
        return id == that.id;
    }

    // Override of the hashCode method to generate a hash code based on the entity's ID
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}