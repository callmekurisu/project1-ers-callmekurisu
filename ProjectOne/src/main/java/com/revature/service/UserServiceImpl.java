package com.revature.service;

import java.util.List;

import com.revature.daos.UserDao;
import com.revature.models.Users;

public class UserServiceImpl implements UserService{

	private UserDao ud = UserDao.currentImplementation;

	@Override
	public List<Users> findAll() {
		return ud.findAll();
	}

	@Override
	public int save(Users u) {
		// TODO Auto-generated method stub
		return ud.save(u);
	}

	@Override
	public int nextId() {
		// TODO Auto-generated method stub
		return ud.nextId();
	}

	
}
