@test
Feature: Create New Project

	Scenario Outline: Verify that user can create a new project successfully
	 Given User navigated to "<link>"
	 And Logins with valid email: "<emailAddress>"
	 And Valid password: "<passwordField>"
	 And Clicks login button
	 Given User navigated to "<link>"
	 And Logins with valid email: "<emailAddress>"
	 And Valid password: "<passwordField>"
	 And Clicks login button
	 And User clicks create button
	 And User fills in name field with: "<name>"
	 And User fills in description field with: "<description>"
	 And User chooses from "<end_date>" form
	#  And User chooses New status
	 And User fills in "<user>" field with valid input
	 And User clicks submit button
	 And User verifies that a message: "<success_message>" is displayed
	#  And User clicks “Project Overview” button
	#  Then User verifies that a new project has been created successfully
		
	 Examples:
	 |                    link                     |  end_date   | status | user | emailAddress        | passwordField   | name  | description | success_message                       |
	 | https://kyle-john-collo.betty.app/home-page | 05/11/2024  | New    | Kyle | jajakrx26@gmail.com | QNvX4pWA6qTtLU! | Test1 | Test Only   | Form has been submitted successfully. |