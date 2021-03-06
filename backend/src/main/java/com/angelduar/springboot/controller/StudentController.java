package com.angelduar.springboot.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.angelduar.springboot.repository.StudentRepository;
import com.angelduar.springboot.model.Student;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class StudentController {
	
	@Autowired
	private StudentRepository studentRepository;
	

	
	@GetMapping("/students")
	public List<Student> getAllStudents(){
		return studentRepository.findAll();
		}
	
	//student rest API
	@PostMapping("/students")
	public Student createStudent(@RequestBody Student student) {
		return studentRepository.save(student);
	}
	
		@GetMapping("/students/{id}")
		public ResponseEntity<Student> getEmployeeById(@PathVariable Long id) {
			Optional<Student> optionalEntity = studentRepository.findById(id);
			Student student = optionalEntity.get();
			return ResponseEntity.ok(student);
		}
	
	//update student rest API
	@PutMapping("/students/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentD){
		Optional<Student> optionalEntity = studentRepository.findById(id);
		Student student = optionalEntity.get();
		
		
		student.setFirst_name(studentD.getFirst_name());
		student.setLast_name(studentD.getLast_name());
		student.setGrade(studentD.getGrade());
		
		Student updatedStudent = studentRepository.save(student);
		return ResponseEntity.ok(updatedStudent);
		
	}
	
	@DeleteMapping("/students/{id}")
	public ResponseEntity<Student> deleteStudent(@PathVariable Long id){
		Optional<Student> optionalEntity = studentRepository.findById(id);
		Student student = optionalEntity.get();
		studentRepository.delete(student);
		return ResponseEntity.ok(null);
			
	}
}
