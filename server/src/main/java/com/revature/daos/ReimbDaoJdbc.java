package com.revature.daos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.revature.models.Reimb;
import com.revature.models.Users;
import com.revature.util.ConnectionUtil;
import com.revature.util.HashingUtil;
import com.revature.util.TsUtil;

public class ReimbDaoJdbc implements ReimbDao {

	@Override
	public List<Reimb> findAll() {
		try (Connection conn = ConnectionUtil.getConnection()) {
			PreparedStatement ps = conn.prepareStatement(
				"SELECT * FROM reimbursement " 
				 
			);
			
			ResultSet rs =  ps.executeQuery();
			
			List<Reimb> reimbs = new ArrayList<>(); 
				while(rs.next()){
					reimbs.add(new Reimb(rs.getInt("reimb_id"), rs.getDouble("reimb_amount"), rs.getTimestamp("reimb_submitted"), rs.getTimestamp("reimb_resolved"), rs.getString("reimb_description"),false, rs.getInt("reimb_author"), rs.getInt("reimb_resolver"), rs.getInt("reimb_status_id"), rs.getInt("reimb_type_id"), null, null));
					}
				return reimbs;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

		@Override
	public int nextId() {
		try (Connection conn = ConnectionUtil.getConnection()) {
			PreparedStatement ps = conn.prepareStatement(
				"SELECT (MAX(reimb_id)+1) AS nextid FROM reimbursement" 	 
			);
			
			ResultSet rs =  ps.executeQuery();
			rs.next();//need to iterate to get first (only row)
			return rs.getInt(1); //get the value in column one (well...there's only one column lol)
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return 0;
	}
	
	@Override
	public int save(Reimb r) {
		try (Connection conn = ConnectionUtil.getConnection()) {
			PreparedStatement ps = conn.prepareStatement(
				"INSERT INTO reimbursement (reimb_id, reimb_amount, reimb_submitted, reimb_resolved, reimb_description, reimb_reciept, reimb_author, reimb_resolver, reimb_status_id, reimb_type_id) VALUES (?, ? ,?, ?, ?, ?, ?, ?, ?, ?)"
			);
			ps.setInt(1, nextId());//calling nextId() because user doesn't enter this
			ps.setDouble(2, r.getAmount());
			ps.setTimestamp(3, TsUtil.stampIt());//user won't enter time stamp, occurs at submission
			ps.setTimestamp(4, r.getResolved());//null until manager review
			ps.setString(5, r.getDescription());
			ps.setBoolean(6, false);//will go back and add receipt functionality
			ps.setInt(7, r.getAuthor());
			ps.setInt(8, r.getResolver());//null until manager review 
			ps.setInt(9, 1);//status should always be one until updated by manager
			ps.setInt(10, r.getType());
			ps.executeUpdate();
			
			return nextId();//if all goes well the next id will return for new user creation
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return 0;
	
	}

	@Override
	public Users findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Users findByUsernameAndPassword(String username, String password) {
		// TODO Auto-generated method stub
		return null;
	}

		
}
