import * as Constants from './constants';
import * as Functions from './functions';

Functions.checkLoging();

Constants.email.keypress(e => {
    if (e.code == 'Enter'){
        Functions.checkEmail();
    }
});
Constants.addBtn.click(Functions.addFilm);
Constants.item_List.click(Functions.item_btn);
Constants.logOutBtn.click(Functions.exit);
