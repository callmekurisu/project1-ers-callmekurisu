package com.revature.daos;

import java.util.List;

import com.revature.models.Reimb;
import com.revature.models.Users;


public interface ReimbDao {

ReimbDao currentImplementation = new ReimbDaoJdbc();
	

	List<Reimb> findAll();
	
	int save(Reimb r);
	
	int nextId();
	
	Users findById(int id);


	Users findByUsernameAndPassword(String username, String password);
}
