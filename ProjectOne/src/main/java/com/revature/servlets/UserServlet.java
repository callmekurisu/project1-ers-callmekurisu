package com.revature.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.models.Users;
import com.revature.service.UserService;

public class UserServlet extends HttpServlet{
	
	private UserService ud = UserService.currentImplementation;
	
	//initialize, start the life cycle
	@Override
	public void init() throws ServletException {
		System.out.println("Initializing...");
	}
	//service does the work
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		System.out.println(req.getRequestURL());
		super.service(req, res);
	}
	//will use this to pull all users reimbursement info
	//manager will have the ability to sort client side
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		System.out.println("Getting all users...");
		
		List<Users> u = ud.findAll();
		
		ObjectMapper om = new ObjectMapper();
		String json = om.writeValueAsString(u);
		res.getWriter().write(json);
	}
	
	//will use this for the user registration page
	//user will need to enter info
	//info will be converted to post request, sent to DAO and then to db
	//password needs to be hashed first
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		System.out.println("Getting new user...");
		ObjectMapper om = new ObjectMapper();
		Users u = om.readValue(req.getReader(), Users.class);
		ud.save(u);
		System.out.println("Saving:" + u.getUsername());
		
		res.setStatus(201);
		System.out.println("ers_users_id: " + (ud.nextId()-1) + " saved successfully");
	}

}
