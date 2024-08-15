package com.sunbeam.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
@ToString
public class User extends BaseEntity {

	    @Column(nullable = false,length = 25)
	    private String firstName;
	    
	    @Column(nullable = false,length = 25)
	    private String lastName;

	    @Column(nullable = false)
	    private String password;

	    @Column(nullable = false,name="phone_number",unique = true)
	    private String phoneNumber;
	    
	    @Column(nullable = false, unique = true)
	    private String email;

	    @Enumerated(EnumType.STRING)
	    @Column(nullable = false)
	    private Role role;
	    
	    private LocalDate dob;
	    
//	    @Lob // large object :col : longblob
//		private byte[] image;
	    @Column(name="is_blocked")
	    private boolean isBlocked=false;
//		public User(String firstName, String lastName, String password, String email, Role role, LocalDate dob,
//				byte[] image) {
//			super();
//			this.firstName = firstName;
//			this.lastName = lastName;
//			this.password = password;
//			this.email = email;
//			this.role = role;
//			this.dob = dob;
//			
//		}
	    
	 
		public User(String firstName, String lastName, String password, String email, Role role, LocalDate dob) {
			super();
			this.firstName = firstName;
			this.lastName = lastName;
			this.password = password;
			this.email = email;
			this.role = role;
			this.dob = dob;
		}
		
		@OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = false)
		private WishList wishlist;
	    
}
