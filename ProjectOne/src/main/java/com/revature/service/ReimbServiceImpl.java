package com.revature.service;

import java.util.List;

import com.revature.daos.ReimbDao;
import com.revature.models.Reimb;

public class ReimbServiceImpl implements ReimbService{

	private ReimbDao rd = ReimbDao.currentImplementation;
	
	@Override
	public List<Reimb> findAll() {
		// TODO Auto-generated method stub
		return rd.findAll();
	}

	@Override
	public int save(Reimb r) {
		// TODO Auto-generated method stub
		return rd.save(r);
	}

	@Override
	public int nextId() {
		// TODO Auto-generated method stub
		return rd.nextId();
	}


}
