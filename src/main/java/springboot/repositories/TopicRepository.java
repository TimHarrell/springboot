package springboot.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import springboot.beans.Topic;

/*
 * JPA knows of standard database functions, so we don't have to implement the functions for transactions
 * 
 * crudRepository is the class that contains the stuff for making these methods
 * 	we need to include the types that is will be dealing with, the first is the entity, the second is the primary key type
 */
@Repository
public interface TopicRepository extends CrudRepository<Topic, String > {
	
	
}
