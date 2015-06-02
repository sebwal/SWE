/// <reference path="../../_all.ts" />

module Customer{
	'use strict';
	
	export class CustomerService{
				
		private customerUri = "http://localhost:8443/shop/rest/kunde"; //localhost might have to be exchanged with ip if wildfly is running in VM
		getAllCustomers(): Customer[]{
			var customers;
			$.getJSON(this.customerUri, cust => {customers = cust;});
	 		return customers;
		}
	}
	
	var app = angular.module('shop');
	app.service('CustomerService', CustomerService);
}