package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/java/features"},
		glue = {"src/test/java/Stef"},
		plugin = {"pretty","html:target/cucumber-reports"}
		
		
		
		)

public class regressionTest {

}
