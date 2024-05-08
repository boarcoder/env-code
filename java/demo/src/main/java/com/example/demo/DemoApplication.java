
// @Singleton
class SingletonClass {
	// volatile String version = '1.0.0';
	SingletonClass(String version) {

		this.version = version;
	}
	
	public String getVersion() {
		return this.version; 
	}

	public String setVersion(String version) {
		this.version = version;
	}

}

// annotations
//http header
//connection to database
@Library()
public static DatabaseConnection() {
	
	return lib;
}

@GetMapping()
public String getCards(String user) {


	lib.getUsers(user);

	return 

}


public static void main() {

}
// @SpringBootApplication
// @RestController
// public class DemoApplication {

// 	@GetMapping("/de")
// 	public String apiRoot() {
// 		return "TEST";
// 	}

// 	public static void main(String[] args) {
// 		SpringApplication.run(DemoApplication.class, args);
// 	}

// }
