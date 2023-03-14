import { onNavigate } from '../router/utils';

export const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'home-container';

  const header = document.createElement('header');
  header.className = 'header-home';

  const logoHome = document.createElement('img');
  logoHome.className = 'logoHome';
  logoHome.src = 'https://raw.githubusercontent.com/fabihasu/DEV003-social-network/main/src/img/logo%20mapa%20de%20bits.png';

  const userIcon = document.createElement('img');
  userIcon.className = 'user';
  userIcon.src = 'https://raw.githubusercontent.com/fabihasu/DEV003-social-network/main/src/img/user.png';

  const categoryList = document.createElement('div');
  categoryList.className = 'category-list';

  const categoriesColumn1 = document.createElement('div');
  categoriesColumn1.className = 'category-container1';

  const categoriesColumn2 = document.createElement('div');
  categoriesColumn2.className = 'category-container2';

  const favorites = document.createElement('div');
  favorites.textContent = 'Favoritos';
  favorites.className = 'favorites';

  const trending = document.createElement('div');
  trending.textContent = 'Tendencias';
  trending.className = 'trending';

  const album = document.createElement('a'); // este botón direcciona a álbum
  album.textContent = 'Álbum';
  album.className = 'albums';

  const artists = document.createElement('div');
  artists.textContent = 'Artistas';
  artists.className = 'artists';

  const genres = document.createElement('div');
  genres.textContent = 'Géneros';
  genres.className = 'genres';

  const songs = document.createElement('div');
  songs.textContent = 'Canciones';
  songs.className = 'songs';


  album.addEventListener('click', () => {
    onNavigate('/album');
  });

  homeDiv.append(header, categoryList);
  header.append(logoHome, userIcon);
  categoryList.append(categoriesColumn1, categoriesColumn2);
  categoriesColumn1.append(favorites, trending, album);
  categoriesColumn2.append(artists, genres, songs);

  return homeDiv;
};

