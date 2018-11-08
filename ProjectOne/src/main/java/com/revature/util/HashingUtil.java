package com.revature.util;

public class HashingUtil {

	public static String hashword(String p) {
		String salt = System.getenv("salt");
		double saltDub = Double.parseDouble(salt);
		//convert hash of password/salt to string value
		String hashedIt = Double.toString((p.hashCode()*saltDub));
		
		return hashedIt;
		
	}
}
