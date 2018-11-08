package com.revature.service;

import java.util.List;

import com.revature.models.Reimb;


public interface ReimbService {

ReimbService currentImplementation = new ReimbServiceImpl();
	
	List<Reimb> findAll();
	//used for user registration
	int save(Reimb r);
	//pull next available id from database, pass to save()
    int nextId();
}
