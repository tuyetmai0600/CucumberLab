package StepDef;

import java.util.concurrent.TimeUnit;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import PageObject.LoginPage;
import cucumber.api.java.*;
import cucumber.api.java.en.*;


public class StepDefinitions {
	WebDriver driver;
	LoginPage lp;
	
	@Given("^user is on the login page$")
	public void user_is_on_the_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "/Users/TM/Desktop/library/chromedriver");
		driver = new ChromeDriver();
		lp = new LoginPage(driver);
		
		driver.get("https://www.saucedemo.com/");
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		Thread.sleep(1000);
	  
		
		
		
	}
//	@Before
//	public void setup() {
//		
//	}
//	@After
//	public void teardown() {
//		driver.quit();
//	}

	@When("^user should be able to type user name$")
	public void user_should_be_able_to_type_user_name() throws Throwable {
	   lp.getUserNameText().sendKeys("standard_user");
	}

	@When("^user should be able to type the password$")
	public void user_should_be_able_to_type_the_password() throws Throwable {
	    lp.getPasswordText().sendKeys("secret_sauce");
	}

	@When("^user should be able to click on login$")
	public void user_should_be_able_to_click_on_login() throws Throwable {
	    lp.getLoginButton().click();
	}

	@Then("^user should be in the user homepage$")
	public void user_should_be_in_the_user_homepage() throws Throwable {
	  
		String actulaPage = driver.getCurrentUrl();
		String expectedPage = "https://www.saucedemo.com/inventory.html";
		
		Assert.assertEquals(actulaPage, expectedPage);
		
	}
	@When("^user enter \"([^\"]*)\" in the userid text box$")
	public void user_enter_in_the_userid_text_box(String arg1) throws Throwable {
	   lp.getUserNameText().sendKeys(arg1);
	}

	@When("^user enter \"([^\"]*)\"in the password text box$")
	public void user_enter_in_the_password_text_box(String arg1) throws Throwable {
	   lp.getPasswordText().sendKeys(arg1);
	}

	@When("^user click the login button$")
	public void user_click_the_login_button() throws Throwable {
	    lp.getLoginButton().click();
	}

	@Then("^user should navigate to the expected \"([^\"]*)\"$")
	public void user_should_navigate_to_the_expected(String arg1) throws Throwable {
	  String actualPage = driver.getCurrentUrl();
	  Assert.assertEquals(actualPage, arg1);

	}



	
}
