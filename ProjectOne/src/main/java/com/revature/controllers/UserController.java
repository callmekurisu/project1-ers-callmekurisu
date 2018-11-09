package com.revature.controllers;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.models.Users;
import com.revature.service.UserService;
import com.revature.util.ResponseMapper;

public class UserController {
	private Logger log = Logger.getRootLogger();
	private UserService ud = UserService.currentImplementation;
	private ObjectMapper om = new ObjectMapper();

	void process(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		String method = req.getMethod();
		switch (method) {
		case "GET":
			processGet(req, resp);
			break;
		case "POST":
			processPost(req, resp);
			break;
		case "OPTIONS":
			return;
		default:
			resp.setStatus(404);
			break;
		}
	}

	private void processGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		String uri = req.getRequestURI();
		String context = "";
		uri = uri.substring(context.length() + 1, uri.length());
		String[] uriArray = uri.split("/");
		System.out.println(Arrays.toString(uriArray));
		if (uriArray.length == 1) {
			log.info("retreiving all users");
			List<Users> users = ud.findAll();
			ResponseMapper.convertAndAttach(users, resp);
			return;
		} else if (uriArray.length == 2) {
			try {
				int id = Integer.parseInt(uriArray[1]);
				log.info("retreiving user with id: " + id);
				Users user = ud.findById(id);
				ResponseMapper.convertAndAttach(user, resp);
				return;
			} catch (NumberFormatException e) {
				resp.setStatus(400);
				return;
			}
		} else {
			resp.setStatus(404);
		}
	}

	private void processPost(HttpServletRequest req, HttpServletResponse resp) throws JsonParseException, JsonMappingException, IOException {
		String uri = req.getRequestURI();
		String context = "";
		uri = uri.substring(context.length() + 2, uri.length());
		if (!"users".equals(uri)) {
			log.debug("could not recognize request with uri: " + uri);
			resp.setStatus(404);
			return;
		} else {
			String role = (String) req.getSession().getAttribute("user_role");
			if (!"manager".equals(role)) {
				resp.setStatus(403);
				return;
			} else {
				log.info("saving new user");
				Users u = om.readValue(req.getReader(), Users.class);
				ud.save(u);
				resp.getWriter().write("" + u.getUserId());
				resp.setStatus(201);
				return;
			}
		}
	}
}
