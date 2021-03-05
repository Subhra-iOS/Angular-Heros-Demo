import { Injectable } from '@angular/core';
import { Hero } from '../app-interface/hero';
import { HEROES } from '../app-interface/mock-heroes';
import { Observable, of} from 'rxjs'
import { MessageService } from '../app-service/message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getAllHeroes(): Observable<Hero[]> {
   // return HEROES
   const heroes = of(HEROES)
   this.messageService.add('HeroesService: Fetch heroes')
   return heroes
  }
  
}

