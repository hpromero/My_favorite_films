import $ from 'jquery';

export const email = $('#email');
export const exp = /^\S+@\S+\.[a-zA-Z]{1,3}$/;
export const error = $('.wrong-msg');
export const wrong_title = $('.wrong-title');
export const panel = $('#lateral-Panel');
export const login = $('#login');
export const welcomeMsg = $('#welcomeMsg');
export const addBtn = $('#addBtn');
export const title = $('#title');
export const synopsis = $('#synopsis'); 
export const list_container = $('#list_container');
export const item_List = $('#item_List');
export const logOutBtn = $('#logOutBtn');

export const item = `
    <li>
        <div class="card-panel no-pading-y">
            <div class="row valign-wrapper item">
                <p class="col s9 title">$$FILM_TITLE$$</p>
                <div id="icon-btn" class="col s3">
                <div class="col s6">
                    <a class="btn-floating waves-effect btn-small teal accent-4 detail-btn"><i class="material-icons">description</i></a>
                </div>
                <div class="col s6">
                    <a class="btn-floating waves-effect waves-light btn-small red remove-btn"><i class="material-icons">delete</i></a>
                </div>
                </div>
            </div>
            <div class="synopsisDetail">
                <div class="divider"></div>
                <p class="synopsisText"></p>
            </div>
        </div>
    </li>
    `;
