package com.revature.daos;

import java.util.List;

import com.revature.models.Reimb;


public interface ReimbDao {

ReimbDao currentImplementation = new ReimbDaoJdbc();
	

	List<Reimb> findAll();
	
	int save(Reimb r);
	
	int nextId();
}
