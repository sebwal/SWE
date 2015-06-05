/// <reference path="../../_all.ts" />

module WebShop{
	'use strict';
	
	export class SidebarElement{
		text: string;
		active: boolean;
		
		constructor(text: string){
			this.text = text;
			this.active = false;
		}
		
		public setActive(active: boolean){
			this.active = active;
		}
	}
}