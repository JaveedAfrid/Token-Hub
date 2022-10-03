package com.brillio.tokenization.entity;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TokenizedData")
public class TokenData {

	@Id
	@Column(name = "Customer_ID")
	private String customerID;
	@Column(name = "Customer_Name")
	private String customerName;
	@Column(name = "Card_Number")
	private String tokenizedCardNumber;
	@Column(name = "Customer_Email")
	private String email;
	@Column(name = "Customer_Number")
	private String phoneNumber;

	public String getCustomerID() {
		return customerID;
	}

	public void setCustomerID(String customerID) {
		this.customerID = customerID;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getTokenizedCardNumber() {
		return tokenizedCardNumber;
	}

	public void setTokenizedCardNumber(String tokenizedCardNumber) {
		this.tokenizedCardNumber = tokenizedCardNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	@Override
	public int hashCode() {
		return Objects.hash(customerID, customerName, email, phoneNumber, tokenizedCardNumber);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TokenData other = (TokenData) obj;
		return Objects.equals(customerID, other.customerID) && Objects.equals(customerName, other.customerName)
				&& Objects.equals(email, other.email) && Objects.equals(phoneNumber, other.phoneNumber)
				&& Objects.equals(tokenizedCardNumber, other.tokenizedCardNumber);
	}

	@Override
	public String toString() {
		return "TokenData [customerID=" + customerID + ", customerName=" + customerName + ", tokenizedCardNumber="
				+ tokenizedCardNumber + ", email=" + email + ", phoneNumber=" + phoneNumber + "]";
	}

}
