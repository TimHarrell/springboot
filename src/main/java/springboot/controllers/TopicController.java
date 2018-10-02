package springboot.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
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
}
