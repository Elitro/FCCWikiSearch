import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {

    constructor(private jsonp: Jsonp) { }

    getWikiSearch(term: string) {

        let wikiUrl = 'http://en.wikipedia.org/w/api.php';

        let params = new URLSearchParams();

        params.set('format', 'json');
        params.set('action', 'query');
        params.set('generator', 'search');
        params.set('gsrnamespace', '0');
        params.set('gsrlimit', '10');
        params.set('prop', 'pageimages|extracts');
        params.set('pilimit', 'max');
        params.set('exintro', '');
        params.set('explaintext', '');
        params.set('exsentences', '1');
        params.set('exlimit', 'max');
        params.set('gsrsearch', term);
        params.set('callback', 'JSONP_CALLBACK');

        // TODO: Add error handling
        return this.jsonp
            .get(wikiUrl, { search: params })
            .map(response => <string[]>response.json().query);
    }

}