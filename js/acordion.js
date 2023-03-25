let acordion = () => {
   let labelItem = document.querySelectorAll('._label__item');

   labelItem.forEach(item => {
      let labelBtn = item.querySelector('._label__title');
      let labelContent = item.querySelector('._label__description');

      labelBtn.addEventListener('click', () => {
         labelContent.classList.add('open')

         labelContent.style.height = labelBtn.scrollHeight + 'px';
      })
   })
}
acordion();