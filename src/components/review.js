import { onNavigate } from '../router/utils';
import { createReview } from '../lib-firebase/index.js';

export const reviews = () => {
  // Elementos del DOM
  const divReview = document.createElement('div');
  divReview.className = 'review-container';

  const bannerContainer = document.createElement('div');
  bannerContainer.className = 'banner-container';

  const albumTitle = document.createElement('h3');
  albumTitle.className = 'album-title';
  albumTitle.textContent = 'Nombre de Álbum';

  const albumDate = document.createElement('h5');
  albumDate.className = 'album-date';
  albumDate.textContent = '2022';

  const buttonBackReview = document.createElement('button');
  buttonBackReview.id = 'buttonBackReview';
  buttonBackReview.className = 'button-back-review';

  const backArrow = document.createElement('img');
  backArrow.className = 'arrow-left';
  backArrow.src = 'img/arrow-left.png';

  const reviewSection = document.createElement('div');
  reviewSection.className = 'review-section';

  const reviewTitle = document.createElement('h3');
  reviewTitle.className = 'review-title';
  reviewTitle.textContent = 'Reviews';

  const reviewBoxContainer = document.createElement('div');
  reviewBoxContainer.className = 'review-box-container';

  const userContainer = document.createElement('div');
  userContainer.className = 'user-container';

  const profileIcon = document.createElement('div');
  profileIcon.className = 'profile-icon';

  const username = document.createElement('div');
  username.className = 'username';
  username.textContent = 'nombre de usuario';
  username.id = 'user';

  const inputReview = document.createElement('textarea');
  inputReview.className = 'input-review';
  inputReview.id = 'commentReview';

  const postReviewButton = document.createElement('button');
  postReviewButton.id = 'postReviewButton';
  postReviewButton.className = 'post-review-button';
  postReviewButton.textContent = 'Publicar';

  // Event listeners
  buttonBackReview.addEventListener('click', () => {
    onNavigate('/album');
  });

  // Post Comment
  postReviewButton.addEventListener('click', () => {
    const commentField = document.getElementById('commentReview').value;
    const user = document.getElementById('user').innerHTML;

    console.log('continue ....');

    createReview(user, commentField)
      .then((result) => {
        // T ODO: cuando la promesa se resuelva
        // alert("exito")
        // renderizarPublicaciones();

      })
      .catch((err) => {
        // alert("ocurrio un error" + err)
      });
    console.log('continue 2....');
  });

  // otra promesa ? o un if, que al ejecutarse el evento se muestre otra estructura de html
  // trabajar con textarea.value (?)

  divReview.append(bannerContainer, reviewSection);
  bannerContainer.append(albumTitle, buttonBackReview);
  albumTitle.appendChild(albumDate);
  buttonBackReview.appendChild(backArrow);
  reviewSection.append(reviewTitle, reviewBoxContainer);
  reviewBoxContainer.append(userContainer, inputReview, postReviewButton);
  userContainer.append(profileIcon, username);

  return divReview;
};
