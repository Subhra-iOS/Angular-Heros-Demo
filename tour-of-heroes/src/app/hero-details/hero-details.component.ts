import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../app-interface/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService} from '../app-service/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero?: Hero

  constructor( private route: ActivatedRoute,
               private heroService: HeroService,
               private location: Location) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.heroService.getHeroWith(Number(id))
                    .subscribe(
                      _hero => this.hero = _hero
                    )
  }

}
