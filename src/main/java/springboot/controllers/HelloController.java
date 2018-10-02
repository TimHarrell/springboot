package springboot.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
 * Controllers map URI and HTTP method to some java functionality
 * 
 * get requests retrieve information
 * post makes
 * put updates
 * delete deletes 
 */
@RestController // tells spring framework that this class will handle HTTP requests with HTTP responses
public class HelloController {

	@RequestMapping("/hello") // tells spring framework that this method should be run when the url is accessed
	public String sayHi() {
		return "hi"; // just returns simple text
	}
}

//notes
	// there is an issue with sending the HTTP request when the controller and the main method are not in the same package/subpackage