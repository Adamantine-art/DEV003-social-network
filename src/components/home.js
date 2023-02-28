import { onNavigate } from '../router/utils';

export const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'home-container';

  const header = document.createElement('header');
  header.className = 'header-home';

  const logoHome = document.createElement('img');
  logoHome.className = 'logoHome';
  logoHome.src = 'img/logo mapa de bits.png';

  const userIcon = document.createElement('img');
  userIcon.className = 'user';
  userIcon.src = 'img/user.png';

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

  // const recommended = document.createElement('h4');
  // recommended.textContent = 'RECOMENDADOS';
  // recommended.className = 'recommended';

  // const recTitle = document.createElement('div');
  // recTitle.className = 'rec-title';

  // const recButton = document.createElement('div');
  // recButton.className = 'rec-button';

  // const recArrow = document.createElement('img');
  // recArrow.className = 'rec-arrow';
  // recArrow.src = 'img/flechita.png';

  // const recContainer = document.createElement('div');
  // recContainer.className = 'rec-container';

  // const recImg = document.createElement('div');
  // recImg.className = 'rec-img';

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

// export default () => {
//   const home = `
//   <div class="home-page">
//   <header>
//     <img class="logo" src="img/logo mapa de bits.png" alt="logo Beat !">
//     <img class="user" src="img/user.png" alt="user img">
//   </header>
//   <nav>
//     <ul>
//       <li class="category-container">
//         <a href="#favoritos" class="favorites">FAVORITOS</a>
//       </li>
//       <li class="category-container">
//         <a href="#tendencias" class="trending">TENDENCIAS</a>
//       </li>
//       <li class="category-container">
//         <a href="#albumes" class="albums">ÁLBUMES</a>
//       </li>
//       <li class="category-container">
//         <a href="#artistas" class="artists">ARTISTAS</a>
//       </li>
//       <li class="category-container">
//         <a href="#generos" class="genres">GÉNEROS</a>
//       </li>
//       <li class="category-container">
//         <a href="#canciones" class="songs">CANCIONES</a>
//       </li>
//     </ul>
//   </nav>
//   <section>
//     <div class="rec-title">
//       <h3 class="recommended">RECOMENDADOS</h3>
//       <button class="rec-arrow">
//         <img src="img/flechita.png" alt="">
//       </button>
//     </div>
//     <div class="rec-container">
//       <div class="rec-img"> </div>
//       <div class="rec-img"> </div>
//       <div class="rec-img"> </div>
//       <div class="rec-img"> </div>
//       <div class="rec-img"> </div>
//       <div class="rec-img"> </div>
//     </div>
//   </section>
// </div>
//     `;

//   const divHome = document.createElement('div');
//   divHome.innerHTML = home;

//   return divHome;
// };
