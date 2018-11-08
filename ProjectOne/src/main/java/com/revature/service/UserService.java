package com.revature.service;

import java.util.List;

import com.revature.models.Users;


public interface UserService {

	UserService currentImplementation = new UserServiceImpl();
	
	List<Users> findAll();
	//used for user registration
	int save(Users u);
	//pull next available id from database, pass to save()
    int nextId();
  
   
}
