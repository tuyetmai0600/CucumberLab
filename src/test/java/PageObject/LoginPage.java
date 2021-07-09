package PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LoginPage {
	WebDriver driver;
	
public 	LoginPage (WebDriver driver) {
	this.driver = driver;
}
public WebElement getUserNameText() {
	WebElement username = driver.findElement(By.id("user-name"));
	return username;
}
public WebElement getPasswordText() {
	WebElement password = driver.findElement(By.id("password"));
	return password;
}
public WebElement getLoginButton() {
	WebElement login = driver.findElement(By.id("login-button"));
	return login;
}

}
