import { Component, OnInit } from '@angular/core';
import { HeroService } from '../app-service/hero.service';
import { Hero } from '../app-interface/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = []
  errorMsg?: string
  constructor(private heroesService: HeroService) { }

  ngOnInit(): void {
    this.getAllHeroes()
  }

  getAllHeroes(){
    this.heroesService.getAllHeroes()
                      .subscribe(
                        _heroes => this.heroes = _heroes.slice(1, 5),
                        _error => this.errorMsg = _error
                      )
  }

}
