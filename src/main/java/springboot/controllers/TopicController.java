package springboot.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.beans.Topic;

@RestController
public class TopicController {

	@RequestMapping("/topics")
	public List<Topic> getAllTopics() {
		return Arrays.asList(
				new Topic("1", "1", "1"),
				new Topic("1", "1", "1"),
				new Topic("1", "1", "1")
				);
	}
}
