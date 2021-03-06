import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let ingredients =
    [
      {id: 1, name: "Milk Steak"},
      {id: 2, name: "Paprika"},
      {id: 3, name: "Fennel"},
      {id: 4, name: "Garlic"},
      {id: 5, name: "Chicken"},
      {id: 6, name: "Sausage"},
      {id: 7, name: "Tofu"},
      {id: 8, name: "Rice"},
      {id: 9, name: "Beans"},
      {id: 10, name: "Pepper"}
    ];
    return {ingredients};
  }
}
