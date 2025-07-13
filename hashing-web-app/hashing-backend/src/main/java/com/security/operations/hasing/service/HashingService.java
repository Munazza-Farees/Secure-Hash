package com.security.operations.hasing.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import org.springframework.stereotype.Service;

@Service
public class HashingService {
    public String generateMD5(String input) throws NoSuchAlgorithmException {
	MessageDigest digest = MessageDigest.getInstance("MD5");
	byte[] hashedBytes = digest.digest(input.getBytes());
	
	StringBuilder hashString = new StringBuilder();
	for (byte b : hashedBytes) {
	    String hash = String.format("%02x", b);
	    hashString.append(hash);
	}
	return hashString.toString();
    }

    public String hashWithSHA1(String input) throws NoSuchAlgorithmException {

	MessageDigest digest = MessageDigest.getInstance("SHA-1");
	byte[] hashedBytes = digest.digest(input.getBytes());

	StringBuilder hexString = new StringBuilder();
	for (byte b : hashedBytes) {
	    String hex = Integer.toHexString(0xff & b);
	    if (hex.length() == 1) {
		hexString.append('0');
	    }
	    hexString.append(hex);
	}

	return hexString.toString();
    }
    
    public String hashWithSHA256(String input) throws NoSuchAlgorithmException {

	MessageDigest digest = MessageDigest.getInstance("SHA-256");
	byte[] hashedBytes = digest.digest(input.getBytes());

	StringBuilder hexString = new StringBuilder();
	for (byte b : hashedBytes) {
	    String hex = Integer.toHexString(0xff & b);
	    if (hex.length() == 1) {
		hexString.append('0');
	    }
	    hexString.append(hex);
	}

	return hexString.toString();
    }

    public String hashWithSHA512(String input) throws NoSuchAlgorithmException {
	MessageDigest digest = MessageDigest.getInstance("SHA-512");
	byte[] hashedBytes = digest.digest(input.getBytes());

	StringBuilder hexString = new StringBuilder();
	for (byte b : hashedBytes) {
	    String hex = Integer.toHexString(0xff & b);
	    if (hex.length() == 1) {
		hexString.append('0');
	    }
	    hexString.append(hex);
	}

	return hexString.toString();
    }

}
