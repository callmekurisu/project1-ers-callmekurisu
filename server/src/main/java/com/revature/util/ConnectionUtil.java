package com.revature.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionUtil {
		
		static {
			try {
				Class.forName("org.postgresql.Driver");
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		public static Connection getConnection() throws SQLException {
			String url = System.getProperty("DB_URL");
			String port = System.getProperty("DB_PORT");
			String dbName = System.getProperty("DB_NAME");
			String dbSchema = System.getProperty("DB_SCHEMA");
			String username = System.getProperty("DB_USERNAME");
			String password = System.getProperty("DB_PASSWORD");

			String dataSource = "jdbc:postgresql://" + url + ":" + port + "/" + dbName + "?currentSchema=" + dbSchema;

			return DriverManager.getConnection(dataSource, username, password);
		}
		
		
		
		
}
