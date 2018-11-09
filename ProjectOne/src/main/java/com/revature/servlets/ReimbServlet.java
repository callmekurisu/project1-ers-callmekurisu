package com.revature.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.models.Reimb;
import com.revature.service.ReimbService;


public class ReimbServlet extends HttpServlet {

	
private ReimbService rd = ReimbService.currentImplementation;
	
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
		System.out.println("Getting all requests...");
		
		List<Reimb> r = rd.findAll();
		
		ObjectMapper om = new ObjectMapper();
		String json = om.writeValueAsString(r);
		res.getWriter().write(json);
	}
	
	//will use this for the user registration page
	//user will need to enter info
	//info will be converted to post request, sent to DAO and then to db
	//password needs to be hashed first
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		System.out.println("Getting new reimbursement...");
		ObjectMapper om = new ObjectMapper();
		Reimb r = om.readValue(req.getReader(), Reimb.class);
		rd.save(r);
		System.out.println("Saving request from user id: " + r.getAuthor());
		
		res.setStatus(201);
		System.out.println("reimb_id: " + (rd.nextId()-1) + " saved successfully");
		
		
		
	}
}
