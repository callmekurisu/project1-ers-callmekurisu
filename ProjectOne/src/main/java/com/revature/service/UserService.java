package com.revature.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import com.revature.dto.Credential;
import com.revature.models.Users;


public interface UserService {

	UserService currentImplementation = new UserServiceImpl();
	
	List<Users> findAll();
	//used for user registration
	int save(Users u);
	//pull next available id from database, pass to save()
    int nextId();
    //find user by id for logging in
    Users findById(int n);
    //credential for session
    boolean login(Credential cred, HttpSession httpSession);
   
}
