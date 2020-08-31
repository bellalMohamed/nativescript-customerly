import { Common } from './customerly.common';
import * as app from 'tns-core-modules/application';
declare const io: any;
declare const android: any;

export class Customerly extends Common {
	public init() {
        io.customerly.Customerly.configure(app.android.context, this.appId);
    }

    public registerUser(user): void {
    	io.customerly.Customerly.registerUser(user.email || '', user.id || '', user.name || '');
    }

    public openSupport() {
        io.customerly.Customerly.openSupport(app.android.startActivity);
    }

    public logoutUser() {
        io.customerly.Customerly.logoutUser();
    }
}
