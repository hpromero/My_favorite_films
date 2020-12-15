import {datafilms} from './datafilms';

export class Film{
    constructor(title, synopsis = '') {
        this.title = title;
        this.synopsis = synopsis;
    }

    save() {
        try {
            const list = JSON.parse(localStorage.getItem('films'));
            list.push(this);
            localStorage.setItem('films', JSON.stringify(list));
            return {status: true};
        } catch (error) {
            return {status: false, error: error};
        }
    }

    static getAll(){
        try {
            let list = JSON.parse(localStorage.getItem('films'));
            if(list == null || list.length == 0){
               Film.testData();
               list = JSON.parse(localStorage.getItem('films'));
            }
            return {status: true, list: list};
        } catch (error) {
            return {status: false, error: error};
        }
    }

    static testData(){
        const initialData = datafilms.map((e) =>{
            return new Film(e.Title, e.Plot);
        });
        try {
            localStorage.setItem('films', JSON.stringify(initialData));
        } catch (error) {
            return error;
        }
    }

    static delete(title){
        try {
            const list = JSON.parse(localStorage.getItem('films'));
            const film = list.find(e => e.title == title);
            list.splice(list.indexOf(film),1);
            localStorage.setItem('films', JSON.stringify(list));
        } catch (error) {
            return error;
        }
    }

    static getSynopsis(title){
        try {
            const list = JSON.parse(localStorage.getItem('films'));
            const synopsis = list.find(e => e.title == title).synopsis;
            return {status: false, synopsis: synopsis};
        } catch (error) {
            return {status: false, error: error};
        }
    }
}
    