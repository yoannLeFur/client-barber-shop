import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Check} from "../../models/check.model";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomePage implements OnInit {

  public urlRessource = environment.url_api_barber_shop + '/check-connexion';
  public value: Object | undefined;

  public subscriptions: Subscription[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.home();
  }

  home() {
    return this.http
      .get(this.urlRessource)
      .pipe(map((value) => {
        this.value = value
        console.log(this.value)
      }));
  }

}
