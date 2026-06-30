import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');

let searchQuery = '';
let page = 1;
const perPage = 15;

if (searchForm) {
  searchForm.addEventListener('submit', async event => {
    event.preventDefault();

    const form = event.currentTarget;
    searchQuery = form.elements['search-text'].value.trim();

    if (searchQuery === '') {
      iziToast.warning({
        title: 'Warning',
        message: 'Please enter a search query!',
      });
      return;
    }

    // Скидання перед новим пошуком
    page = 1;
    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
      const data = await getImagesByQuery(searchQuery, page);

      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query.',
        });
        return;
      }

      createGallery(data.hits);

      // Перевірка: чи є що завантажувати далі
      if (data.totalHits > perPage) {
        showLoadMoreButton();
      }
    } catch (error) {
      console.error(error);
      iziToast.error({ message: 'Something went wrong.' });
    } finally {
      hideLoader();
      form.reset();
    }
  });
}

// Обробник для кнопки Load more
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', async () => {
    page += 1;
    hideLoadMoreButton();
    showLoader();

    try {
      const data = await getImagesByQuery(searchQuery, page);
      createGallery(data.hits);

      // Реалізація плавного скролу на 2 висоти картки
      const galleryItem = document.querySelector('.gallery-item');
      if (galleryItem) {
        const { height } = galleryItem.getBoundingClientRect();
        window.scrollBy({
          top: height * 2,
          behavior: 'smooth',
        });
      }

      // Перевіряємо, чи досягли ми кінця колекції
      const totalPages = Math.ceil(data.totalHits / perPage);
      if (page >= totalPages) {
        hideLoadMoreButton();
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
        });
      } else {
        showLoadMoreButton();
      }
    } catch (error) {
      console.error(error);
      iziToast.error({ message: 'Failed to load more images.' });
    } finally {
      hideLoader();
    }
  });
}
