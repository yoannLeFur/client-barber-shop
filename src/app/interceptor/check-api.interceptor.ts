import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {AgedissError} from "../models/agediss-error.model";

export function checkApi(http: HttpClient): () => Promise<any> {

  function removeLoader() {
    let element = document.getElementById('page-loader');
    // @ts-ignore
    element.parentNode.removeChild(element);
  }

  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      return http.get(environment.url_api_barber_shop + '/check-connexion')
        .toPromise().then(
          success => {
            // @ts-ignore
            resolve();
          }
        )
        .catch((err: HttpErrorResponse) => {
          const log = new AgedissError();
          log.message = 'Une erreur est survenue lors du controle de l\'api : ' + environment.url_api_barber_shop;
          log.name = 'INITIALIZE_APP';
        });
    });
  };

}
