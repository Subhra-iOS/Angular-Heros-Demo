import { Component, OnInit } from '@angular/core';
import { Hero } from '../app-interface/hero';
//import { HEROES } from '../app-interface/mock-heroes';
import { HeroService } from '../app-service/hero.service';
import { MessageService } from '../app-service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  selectedHero?: Hero
  //heroes = HEROES
  heroes: Hero[] = []
  errorMessage?: string
  
  constructor(private heroService: HeroService, private messageService: MessageService) {

   }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
   // this.heroes = this.heroService.getAllHeroes()
    this.heroService.getAllHeroes()
                    .subscribe(
                      heroes => this.heroes = heroes,
                      error => this.errorMessage = error
                    )
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero
    this.messageService.add(`You have selected ${hero.name} with ${hero.id}`)
  }


}
