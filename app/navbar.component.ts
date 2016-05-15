import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {ReposService} from './repos.service'

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ReposService]
})
export class NavBarComponent {
    repos:any[];

    constructor(private _reposService:ReposService) {
    }

    ngOnInit() {
        this.repos = this._reposService.getRepos();
    }

}