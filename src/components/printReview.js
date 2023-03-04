import { reviews } from './review';

export const printReviews = () => {
  const commentField = document.getElementById('commentReview');

  let html = '';

  reviews.forEach((doc) => {
    const post = doc.data();
    // console.log(post.userId);
    html += `
        <div>
          <p>${post.comment}</p>
        </div>
        `;
  });

  commentField.innerHTML = html;
};

// tal vez unificar el tema de los template strings y solo usar
// create element para construir el nuevo html
