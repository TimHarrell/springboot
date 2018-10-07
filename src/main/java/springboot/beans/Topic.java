package springboot.beans;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity // marks the class so JPA knows to make a table for it
public class Topic {

	@Id // marks the id as the primary key
	private String id;
	private String name;
	private String description;
	
	public Topic(String id, String name, String description) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
	}
	public Topic() {
		super();
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
