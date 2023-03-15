import { onNavigate } from '../router/utils';
import { createReview, getReview, deleteReview } from '../lib-firebase/index.js';

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
  backArrow.src = 'https://raw.githubusercontent.com/fabihasu/DEV003-social-network/main/src/img/arrow-left.png';

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
  profileIcon.id = 'profileIcon';

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

  const htmlResult = document.createElement('div'); // enlazar este div al dom
  htmlResult.className = 'new-review';


  // Event listeners
  buttonBackReview.addEventListener('click', () => {
    onNavigate('/album');
  });

  // Print Review - estructura del nuevo review creado
  const printReviews = (commentField, commentId) => {
    // const commentField = document.getElementById('commentReview').value;

    const commentedReview = `
    <div class="review-box-container">
    <div class="user-container">
      <div class="profile-icon" id="profileIcon"></div>
      <div class="username" id="user">nombre de usuario</div>
    </div>
    <p class="comment-review" id="commentReview">${commentField}</p>
    <div class="edit-delete-icons">
      <a class="edit-icon"><img src="https://raw.githubusercontent.com/fabihasu/DEV003-social-network/main/src/img/edit-pencil.png"  alt="edit"></a>
      <a class="delete-icon">
        <img src="https://raw.githubusercontent.com/fabihasu/DEV003-social-network/main/src/img/trash.png"  alt="delete" data-id="${commentId}" />
      </a>
    </div>
  </div>`;

    return commentedReview;
    // newReview.insertAdjacentHTML('beforeEnd', commentedReview);
  };


  function showReviews() {
    htmlResult.innerHTML = '';
    getReview().then((arrayReviews) => {
      arrayReviews.forEach((element) => {
        htmlResult.innerHTML += printReviews(element.data().comment, element.id);
        
      });

      const deleteButtons = divReview.querySelectorAll('.delete-icon');

      deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', (event)=> {
          const commentId = event.target.dataset.id
          deleteReview(commentId).then(() => {
            alert('Comentario eliminado exitosamente.')
            showReviews()
          })
        })
      })
    });
  }



  // Post Comment
  postReviewButton.addEventListener('click', () => {
    const commentField = document.getElementById('commentReview').value;
    const user = document.getElementById('user').innerHTML;

    printReviews(); // esta función al ejecutarse renderiza las publicaciones

    createReview(user, commentField)
      .then((result) => {
        alert('exito', result);
        showReviews();
      })
      .catch((err) => {
        // alert(`ocurrio un error${err}`);
        if (commentField === '') {
          alert('Campo vacío', err);
        }
      });
  });


  divReview.append(bannerContainer, reviewSection, htmlResult);
  bannerContainer.append(albumTitle, buttonBackReview);
  albumTitle.appendChild(albumDate);
  buttonBackReview.appendChild(backArrow);
  reviewSection.append(reviewTitle, reviewBoxContainer);
  reviewBoxContainer.append(userContainer, inputReview, postReviewButton);
  userContainer.append(profileIcon, username);
  // htmlResult.appendChild(editDeleteIcons);
  // editDeleteIcons.append(editIcon,deleteIcon);

  showReviews()
  // deleteReview()
  return divReview;
  };
