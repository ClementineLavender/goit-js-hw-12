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
const loadMoreBtn = document.querySelector('.gallery-btn');

let searchQuery = '';
let page = 1;
const perPage = 15;

if (searchForm) {
  searchForm.addEventListener('submit', async event => {
    event.preventDefault();

    const form = event.currentTarget;
    const queryInputValue = form.elements['search-text'].value.trim();

    if (queryInputValue === '') {
      iziToast.warning({
        title: 'Warning',
        message: 'Please enter a search query!',
      });
      return;
    }

    searchQuery = queryInputValue;
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

      if (data.totalHits > perPage) {
        showLoadMoreButton();
      } else {
        hideLoadMoreButton();
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
        });
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

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', async () => {
    page += 1;
    hideLoadMoreButton();
    showLoader();

    try {
      const data = await getImagesByQuery(searchQuery, page);
      createGallery(data.hits);

      const galleryItem = document.querySelector('.list-item');
      if (galleryItem) {
        const { height } = galleryItem.getBoundingClientRect();
        window.scrollBy({
          top: height * 2,
          behavior: 'smooth',
        });
      }

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
