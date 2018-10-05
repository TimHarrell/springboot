package springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BootApplication {

	public static void main(String[] args) {
		SpringApplication.run(BootApplication.class, args);
	}

}

/* 
 * when the spring applciation starts, it does a classpath 
 * scan which searches classes with particular annotations 
 * and utilizes the classes depending on their annotations
*/

//NEXT: going over returning objects from controller