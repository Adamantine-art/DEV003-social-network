export const album = () => {
  const sectionAlbum = document.createElement('div');
  sectionAlbum.className = 'main-container-album';

  const header = document.createElement('header');
  header.className = 'header-home';

  const logoHome = document.createElement('img');
  logoHome.className = 'logoHome';
  logoHome.src = 'img/logo mapa de bits.png';

  const userIcon = document.createElement('img');
  userIcon.className = 'user';
  userIcon.src = 'img/user.png';

  const titleMenuAlbum = document.createElement('h3');
  titleMenuAlbum.className = 'title-menu-album';
  titleMenuAlbum.textContent = 'Lista de álbumes';

  const containerAlbum = document.createElement('div');
  containerAlbum.className = 'container-album';

  const titleOptionAlbum = document.createElement('div');
  titleOptionAlbum.className = 'title-option-album';
  titleOptionAlbum.textContent = 'Álbumes';

  const containerItemAlbum = document.createElement('div');
  containerItemAlbum.className = 'container-items-album';

  const itemAlbum = document.createElement('div');
  itemAlbum.className = 'item-album';

  const itemAlbum1 = document.createElement('div');
  itemAlbum1.className = 'item-album';

  const imgAlbum = document.createElement('div');
  imgAlbum.className = 'img-album';

  const nameAlbum = document.createElement('p');
  nameAlbum.className = 'name-Album';
  nameAlbum.textContent = 'Nombre';

  const itemAlbumIcons = document.createElement('div');
  itemAlbumIcons.className = 'item-album-icons';

  const imgChatBuble = document.createElement('img');
  imgChatBuble.className = 'img-chat-bubble';
  imgChatBuble.src = 'img/chat-bubble.png';
  imgChatBuble.type = 'button';

  const imgHeart = document.createElement('img');
  imgHeart.className = 'img-heart';
  imgHeart.src = 'img/Vector.png';

  const moreOptions = document.createElement('img');
  moreOptions.className = 'more-options';
  moreOptions.src = 'img/more-vert.png';

  sectionAlbum.append(header, titleMenuAlbum, containerAlbum);
  header.append(logoHome, userIcon);
  containerAlbum.append(titleOptionAlbum, containerItemAlbum);
  containerItemAlbum.append(itemAlbum);
  itemAlbum.append(imgAlbum, nameAlbum, itemAlbumIcons);
  itemAlbumIcons.append(imgChatBuble, imgHeart, moreOptions);
  containerItemAlbum.append(itemAlbum);
  return sectionAlbum;
};
