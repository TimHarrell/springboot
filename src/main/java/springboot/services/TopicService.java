package springboot.services;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import springboot.beans.Topic;

@Service // stereotype that marks this class as a service
public class TopicService {

	private List<Topic> topics = Arrays.asList(
			new Topic("1", "Van der Waals Equation", "Similar to ideal gas law, which describes the state of a system, but takes into account that gas molecules influence eachother"),
			new Topic("2", "Schrodinger Wave Equation", "Describes how the wave function of a system changes over time"),
			new Topic("3", "Heat Capacity", "The change in heat of a system is directly proporitional to the mass, specific heat, and change in temperature")
			);
	
	public List<Topic> getAllTopics() {
		return topics;
	}
	
	/*
	 * retrieve a topic based on the id
	 * lambda function doesn't need to be used, a normal for loop would suffice, but this is more elegant 
	 */
	public Topic getTopic(String id) { 
		return topics.stream().filter(t -> t.getId().equals(id)).findFirst().get();
	}
}
