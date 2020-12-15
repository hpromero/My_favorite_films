import * as Constants from './constants';
import {Film} from './Film';

export function checkEmail(){
    if (Constants.exp.test(Constants.email.val())){
        saveEmail();
        checkLoging();
        Constants.error.hide();
    } else {
        Constants.error.show();
    }
}

function saveEmail(){
    sessionStorage.setItem('login', Constants.email.val());
    Constants.welcomeMsg.text('Welcome '+Constants.email.val().split('@')[0]);
}

export function checkLoging(){
    Constants.login.hide();
    Constants.list_container.hide();
    Constants.panel.hide();
    try {
        const email = sessionStorage.getItem('login');
        Constants.welcomeMsg.text('Welcome '+email.split('@')[0]);
        Constants.panel.show();
        Constants.list_container.show();
        getlist();
    } catch (error) {
        Constants.login.show();
    }
}

export function addFilm(){
    if (Constants.title.val()){
        const newFilm = new Film(Constants.title.val(), Constants.synopsis.val());
        newFilm.save();
        Constants.title.val('');
        Constants.synopsis.val('');
        getlist();
        Constants.wrong_title.hide();
    } else {
        Constants.wrong_title.show();
    }
}

export function getlist(){
    const response = Film.getAll();
    let htmlString = '';
    if (response.status){
        
        response.list.forEach(element => {
            /*
            const str = Constants.item.replace('$$FILM_TITLE$$', element.title);
            htmlString += str.replace('$$FILM_SYNOPSIS$$', element.synopsis);
            */
           htmlString += Constants.item.replace('$$FILM_TITLE$$', element.title);
        });
        Constants.item_List.html(htmlString);
        hideAllDetail();
    } else {
        alert(`Error: ${response.error.message}`);
    }
}

export const item_btn = e => {
    const item = e.target.closest('li');
    if (e.target.matches('.remove-btn *')){
        remove(item);
    } else if (e.target.matches('.detail-btn *')){
        detail(item);
    }
};

function remove(item){
    const title = item.querySelector('.title').textContent;
    Film.delete(title);
    item.remove();
}

function detail(item){
    const detail = item.querySelector('.synopsisDetail');
    const title = item.querySelector('.title').textContent;
    const synopsisP = item.querySelector('.synopsisText');
    const detailState = detail.style.display == 'none';
    hideAllDetail();
    if (detailState){
        detail.style.display= '';
        synopsisP.textContent = Film.getSynopsis(title).synopsis;
    } else {
        detail.style.display= 'none';
    }
}

function hideAllDetail(){
    const allDetails2 = document.querySelectorAll('.synopsisDetail');
    allDetails2.forEach( e => {
        e.style.display = 'none';
    });
}

export function exit(){
    sessionStorage.removeItem('login');
    checkLoging();
}