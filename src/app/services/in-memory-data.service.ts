import {InMemoryDbService} from 'angular-in-memory-web-api';

// tslint:disable:max-line-length
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: 'Vision', imageName: 'Vision.jpg', bio: 'The metal monstrosity called Ultron, constructed by the size-changing scientist Henry Pym himself, inadvertently gained sentience and rebelled against the Avengers\'s resident roboticist. After six months of failure, Ultron kidnapped the first Human Torch\'s initial creator, Professor Phineas T. Horton. Ultron decided to create his own android using the android Human Torch of the 1940s (actually a divergent Human Torch created by Immortus for his own machinations) to serve as a vehicle of vengeance against the Avengers. Ultron had Professor Horton color the android\'s face red, and also had Professor Horton alter the Horton Cells of which the Torch consisted, giving his creation density-shifting powers. When the Vision was "birthed," however, Ultron discovered that Professor Horton had not erased or destroyed the Vision\'s memories as the Torch. Ultron killed Professor Horton for having betrayed him, and the "Torch" sought vengeance. Ultron defeated him and endowed the Vision\'s neural processors with the brain patterns of Simon Williams, the ionically charged costumed champion called Wonder Man, implanting a control crystal to keep him in check.'},
      {id: 2, name: 'Scarlet Witch', imageName: 'Scarlet_Witch.jpg', bio: 'Wanda Lensherr, the Scarlet Witch, was the daughter of Magneto and the sister of Quicksilver. She had the ability to alter probability fields with her hex-spheres. Wanda was a passive member of Magneto\'s team, and after her father\'s apparent death, began working with the Brotherhood, participating in the rescue of the X-Men from Weapon X. She helped lead the Brotherhood for a while, all the while keeping in touch with Charles Xavier to promote a more peaceful mutant-human integration. When Magneto returned, she and her brother fled, although he caught them. Magneto injured Quicksilver, but left Wanda unhurt. Eventually, both Wanda and her brother joined the Ultimates.'},
      {id: 3, name: 'Captain America', imageName: 'Captain_America.jpg', bio: 'Steve Rogers was born July 4, 1920, to poor Irish immigrant parents, Sarah and Joseph Rogers. Rogers grew up a frail youth during the Great Depression in America. Little else is known about Rogers\' early life other than the fact that a strong sense of duty, honor, and humility was instilled in him; perhaps due to his Irish Catholic upbringing. Rogers\' father died when he was a child and his mother died from pneumonia later, when he was in his late teens.'},
      {id: 4, name: 'Hulk'},
      {id: 5, name: 'Iron Man'},
      {id: 6, name: 'Captain Marvel'},
      {id: 7, name: 'Black Widow'},
      {id: 8, name: 'Thor'},
      {id: 9, name: 'Quicksilver'},
      {id: 10, name: 'Nick Fury'},
    ];
    return {heroes};
  }
}
