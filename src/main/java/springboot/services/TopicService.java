package springboot.services;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import springboot.beans.Topic;

@Service // stereotype that marks this class as a service
public class TopicService {

	private List<Topic> topics = Arrays.asList(
			new Topic("1", "1", "1"),
			new Topic("1", "1", "1"),
			new Topic("1", "1", "1")
			);
	
	public List<Topic> getAllTopics() {
		return topics;
	}
}
