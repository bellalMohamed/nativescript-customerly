import { Customerly } from 'nativescript-customerly';
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";

import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();
}

const customerly: any = new Customerly("37ec23c4");

export function initChat() {
	customerly.init()
	customerly.registerUser("b.mohamed@gmail.com", 'aaa');
}

export function openChat() {
	customerly.openSupport();
}

export function logoutUser() {
	customerly.logoutUser();
}
