import { fruitsData } from "./data-store/fruits.js";
import { randomAlbumData } from "./data-store/music-album.js";
import { usersData } from "./data-store/users.js";
import {
  getAllItemsByKey,
  getItemByKey,
  getItemsCount,
  getItemsSum,
  getMinValue,
  getValuesStartsWith,
} from "./getDataFunctions.js";

// Do wyliczenia danych poniżej użyj faktycznego źródła: randomAlbumData
console.log(`-- Album Info -- 
Genre: ${getAllItemsByKey(randomAlbumData.genres, "name")}
Artist: ${getItemByKey(randomAlbumData.artist, "name")}
Number of tracks: ${getItemsCount(randomAlbumData.tracks)}
Total album duration: ${getItemsSum(randomAlbumData.tracks, "duration")}
Shortest track: "${getMinValue(randomAlbumData.tracks, "duration").title}"
`);

// Do wyliczenia danych poniżej użyj faktycznego źródła: fruitsData
console.log(`-- Fruits Info -- 
All fruit families: ${getAllItemsByKey(fruitsData, "family")}
All fruit starts with "g": ${getValuesStartsWith(fruitsData, "name", "g")}
Lowest calories: ${fruitsData.reduce((acc, fruit) => acc.nutritions.calories < fruit.nutritions.calories ? acc : fruit).name}
`);

// Do wyliczenia danych poniżej użyj faktycznego źródła: usersData
console.log(`-- Users Info -- 
All user names: ${getAllItemsByKey(usersData, "name")}
User shortest website name: ${getMinValue(usersData, "website").website}
`);
