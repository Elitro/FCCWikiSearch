import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Jsonp, URLSearchParams } from '@angular/http';


@Injectable()
export class SearchService {

    /*private options: RequestOptions = new RequestOptions();

    private endpoint: string = 'https://en.wikipedia.org/w/api.php';

    //https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&rvsection=0&titles=pizza

    constructor(private http: Http) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.options.headers = headers;
    }

    getWikiSearch(searchTerm: string) {
        let urlProps = '?action=query&prop=revisions&rvprop=content&format=json&rvsection=0';
        let url = `${this.endpoint}${urlProps}&titles=${searchTerm}`;

        return this.http.get(url, this.options)
            .catch((e: string) => {
                return e;
            })
            .map(response => {
                return response;
            });

    }*/


    constructor(private jsonp: Jsonp) { }

    getWikiSearch(term: string) {

        let wikiUrl = 'http://en.wikipedia.org/w/api.php';

        let params = new URLSearchParams();

        /*//params.set('search', term); // the user's search value
        params.set('titles', term);
        params.set('action', 'query');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        //params.set('namespace', '0');
        //params.set('limit', '10');
        params.set('prop', 'text');
        */

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

/*https://en.wikipedia.org/w/api.php?
format=json
&action=query
&generator=search
&gsrnamespace=0
&gsrlimit=10
&prop=pageimages|extracts
&pilimit=max
&exintro
&explaintext
&exsentences=1
&exlimit=max
&gsrsearch=benfica
&callback=angular.callbacks._2

/w/api.php?action=query
&format=json
&smaxage=0
&prop=pageimages%7Cextracts
&list=&meta=
&continue=
&titles=benfica
&generator=searc
h&callback=
&exsentences=1
&exintro=1
&explaintext=1
&gsrsearch=benfica
&gsrnamespace=
&gsrlimit=10
*/