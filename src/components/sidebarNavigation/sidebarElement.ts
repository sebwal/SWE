/// <reference path="../../_all.ts" />

module WebShop{
	'use strict';
	
	export class SidebarElement{
		
		constructor(private name: string, private href: string, private glyphicon: string, private isActive: boolean){
		}
		
		public activate(){
			this.isActive = true;
		}
		
		public deactivate(){
			this.isActive = false;
		}
	}
}