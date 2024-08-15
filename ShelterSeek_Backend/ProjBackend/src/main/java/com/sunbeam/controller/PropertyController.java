package com.sunbeam.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sunbeam.DTO.ApiResponse;
import com.sunbeam.DTO.PropertyDTO;
import com.sunbeam.DTO.PropertyReqDTO;
import com.sunbeam.entities.Property;
import com.sunbeam.services.PropertyService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "http://localhost:5173")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;



    @GetMapping("/getPropertyById/{id}")
    public ResponseEntity<?> getProperty(@PathVariable Long id){
		try {
			//return ResponseEntity.status(HttpStatus.OK).body(propertyService.getProperty(id));
			return ResponseEntity.status(HttpStatus.OK).body(propertyService.getPropertyWithOwner(id));
		}
		catch(RuntimeException e){
			System.out.println("error"+e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
		}
		
		   @GetMapping("/allProperty")
		    public ResponseEntity<?> getAllProperty(){
				try {
					return ResponseEntity.status(HttpStatus.OK).body(propertyService.getAllProperties());
				}
				catch(RuntimeException e){
					System.out.println("error"+e);
					return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
				}

    }
    
  
		   @PostMapping("/addProperty/{ownerId}")
		    public ResponseEntity<?> createProperty(@ModelAttribute PropertyReqDTO propertyDTO, @PathVariable Long ownerId) {
		        try {
		        	System.out.println("here 1");
		            PropertyDTO savedProperty = propertyService.addNProperty(propertyDTO, ownerId);
		            return ResponseEntity.ok(savedProperty);
		        } catch (Exception e) {
		            return ResponseEntity.badRequest().build();
		        }
		    }

 
    public ResponseEntity<?> updateProperty(@RequestBody PropertyDTO propertyDTO,@PathVariable Long id){
		try {
			return ResponseEntity.status(HttpStatus.OK).body(propertyService.updateProperty(propertyDTO, id));
		}
		catch(RuntimeException e){
			System.out.println("error"+e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
    
}
    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> deleteProperty(@PathVariable Long id){
		try {
			return ResponseEntity.status(HttpStatus.OK).body(propertyService.deleteProperty(id));
		}
		catch(RuntimeException e){
			System.out.println("error"+e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
    
    }
    
    
	@GetMapping("/allPropertiesByOwnerId/{id}")
	public ResponseEntity<?> getOwner(@PathVariable Long id){
		try {
			return ResponseEntity.status(HttpStatus.OK).body(propertyService.getAllProp(id));
		}
		catch(RuntimeException e){
			System.out.println("error"+e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
    
    
    


}

