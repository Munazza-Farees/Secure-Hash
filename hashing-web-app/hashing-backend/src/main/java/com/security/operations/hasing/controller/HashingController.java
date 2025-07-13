package com.security.operations.hasing.controller;

import com.security.operations.hasing.service.HashingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/hash")
public class HashingController {
    
    @Autowired
    private HashingService hashingService;
    
    @PostMapping("/md5")
    public ResponseEntity<String> generateMD5(@RequestBody String input) {
	try {
	    String hashed = hashingService.generateMD5(input);
	    return ResponseEntity.ok(hashed);
	} catch (Exception e) {
	    return ResponseEntity.badRequest().body("Error: "+e.getMessage());
	}
    }
    
    @PostMapping("/sha1")
    public ResponseEntity<String> hashSHA1(@RequestBody String input) {
	try {
	    String hashed = hashingService.hashWithSHA1(input);
	    return ResponseEntity.ok(hashed);
	} catch (Exception e) {
	    return ResponseEntity.badRequest().body("Error: "+e.getMessage());
	}
    }
    
    @PostMapping("/sha256")
    public ResponseEntity<String> hashSHA256(@RequestBody String input) {
	try {
	    String hashed = hashingService.hashWithSHA256(input);
	    return ResponseEntity.ok(hashed);
	} catch (Exception e) {
	    return ResponseEntity.badRequest().body("Error: "+e.getMessage());
	}
    }
    
    @PostMapping("/sha512")
    public ResponseEntity<String> hashSHA512(@RequestBody String input) {
	try {
	    String hashed = hashingService.hashWithSHA512(input);
	    return ResponseEntity.ok(hashed);
	} catch (Exception e) {
	    return ResponseEntity.badRequest().body("Error: "+e.getMessage());
	}
    }
}