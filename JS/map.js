$(document).ready(function() {
  const $img = $('#map');

  // Wait for the image to fully load
  $img.on('load', function() {
    // Initialize the image map highlighting
    $(this).rwdImageMaps();
    $('.mapper').maphilight().parent().addClass('center-map');
  }).each(function() {
    // For cached images
    if(this.complete) $(this).trigger('load');
  });

  const openPopupButtons = document.querySelectorAll('[data-modal-target]');
  const closePopupButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  openPopupButtons.forEach(area => {
    area.addEventListener('click',() => {
      const popup = document.querySelector(area.dataset.modalTarget)
      openModal(popup)
    })
  });

  closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popup = button.closest('.popup')
      closeModal(popup)
    })
  });

  overlay.addEventListener('click',() => {
    const popups = document.querySelectorAll('.popup.active')
    popups.forEach((popup) => {
      closeModal(popup)
    });
  });

  function openModal(popup) {
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
  }

  function closeModal(popup) {
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
  }
});