package springboot.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.beans.Topic;
import springboot.repositories.TopicRepository;

@Service // stereotype that marks this class as a service
public class TopicService {
	@Autowired
	private TopicRepository topicRepository; //contains the functions necessary to actual interact with the database
	
	private List<Topic> topics = new ArrayList<>(Arrays.asList(
			new Topic("1", "Van der Waals Equation", "Similar to ideal gas law, which describes the state of a system, but takes into account that gas molecules influence eachother"),
			new Topic("2", "Schrodinger Wave Equation", "Describes how the wave function of a system changes over time"),
			new Topic("3", "Heat Capacity", "The change in heat of a system is directly proporitional to the mass, specific heat, and change in temperature")
			));
	
	public List<Topic> getAllTopics() {
		//return topics;
		
		// instead of messing with our hardcoded list of topics, let's actual interact with our database
		
		// find all is a method that CrudRepository provided to our interface
		List<Topic> topics = new ArrayList<>();
		topicRepository.findAll().forEach(topics::add); //iterate over all of the topics in the database and add it to our arraylist
		return topics;
	}
	
	/*
	 * retrieve a topic based on the id
	 * lambda function doesn't need to be used, a normal for loop would suffice, but this is more elegant 
	 */
	public Topic getTopic(String id) { 
		return topicRepository.findOne(id);
	}
	
	public void addTopic(Topic topic) {
		topicRepository.save(topic);
	}
	
	public void updateTopic(String id, Topic topic) {
		topicRepository.save(topic);
	}
	
	public void deleteTopic(String id) {
		topicRepository.delete(id);
	}
}
