package springboot.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.beans.Topic;
import springboot.services.TopicService;

@RestController
public class TopicController {

	/*
	 * the topic service singleton needs to be injected
	 * @Autowired checks if the thing being injected already exists (it should already be instantiated because this 
	 * is a spring boot application,
	 * and injects it
	 */
	@Autowired
	private TopicService topicService;
	
	@RequestMapping("/topics")
	public List<Topic> getAllTopics() {
		return topicService.getAllTopics();
	}
	
	/*
	 * we want the second string after the slash to be variable, so depending on the input, different things can be retrieved
	 * @Path variable tells the path that this parameter is suppused to be inserted into a part of the path
	 * the {id}, {} represents a variable, and id represents the name, so it knows which parameter goes where
	 */
	@RequestMapping("/topics/{id}")
	public Topic getTopic(@PathVariable String id) {
		return topicService.getTopic(id);
	}
	
	/*
	 * @RequestBody will retrieve a topic object from the request body, this parameter is inserted based on what is in the body of the request
	 * @PostMapping is the same as @RequestMapping, but the method type is post and value="/topics"
	 * postman notes: post type, header: content-type, applicaiton/json, enter appropriate json object into body
	 */
	@PostMapping("/topics")
	public void addTopic(@RequestBody Topic topic) {
		topicService.addTopic(topic);
	}
	
	@PutMapping("/topics/{id}")
	public void updateTopic(@PathVariable String id, @RequestBody Topic topic) {
		topicService.updateTopic(id, topic);
	}
	
	@DeleteMapping("/topics/{id}")
	public void deleteTopic(@PathVariable String id) {
		topicService.deleteTopic(id);
	}
	
	
}
