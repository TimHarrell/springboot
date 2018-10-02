package springboot.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
}
