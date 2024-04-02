import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable, forkJoin, map } from "rxjs";
import { environment } from "../../environments/environment";

import websiteStaticText from '../../assets/website-static-text.json';


export class CvTranslateLoader implements TranslateLoader {

    constructor (private http: HttpClient) {}

    getTranslation(lang: string): Observable<any> {
        const apiURL = environment.envVar.NG_APP_API_URL;
        return this.http.get(apiURL).pipe(map(cvData => {
            type TResult = { [key: string]: any };
            const scanForTranslations = (result: TResult, obj: any) => {
                for (let propName in obj) {
                    const prop = obj[propName];
                    if (Array.isArray(prop)) {
                        const propArr: TResult[] = [];
                        prop.forEach(el => {
                            const obj: TResult = {};
                            propArr.push(obj);
                            scanForTranslations(obj, el);
                        });
                        result[propName] = propArr;
                    } else if (prop instanceof Object) {
                        if (prop.$translate) {
                            let translation = prop.$translate[lang];
                            if (!translation) {
                                translation = prop.$translate.en;
                            }
                            result[propName] = translation;
                        } else {
                            const propObj: TResult = {};
                            scanForTranslations(propObj, prop);
                            result[propName] = propObj;
                        }
                    } else {
                        result[propName] = prop;
                    }
                }
            };

            const result: TResult = {};
            const staticText: TResult = {}
            scanForTranslations(staticText, websiteStaticText);
            scanForTranslations(result, cvData);
            result['staticText'] = staticText;
            console.log(result);
            return result;
        }));
    }
}