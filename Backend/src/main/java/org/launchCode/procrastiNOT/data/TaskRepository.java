package org.launchCode.procrastiNOT.data;

import org.launchCode.procrastiNOT.models.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TaskRepository extends CrudRepository<Task, Integer> {

    @Override
    boolean existsById(Integer id);

    @Override
    Optional<Task> findById(Integer id);

    @Override
    Iterable<Task> findAllById(Iterable<Integer> tasksId);

    @Override
    void deleteById(Integer id);

    @Override
    void deleteAll(Iterable<? extends Task> entities);
    //    @Override

}
