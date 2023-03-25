let accordeon = () => {
   const chItems = document.querySelectorAll('._label__item');
   chItems.forEach(item => {
      const chButton = item.querySelector('._label__title');
      const chContent = item.querySelector('._label__description');
      
      chButton.addEventListener('click', () => {
         chItems.forEach(item => {
            const chContent2 = item.querySelector('._label__description');
            chContent2.classList.remove('_active');
            chContent2.style.height = '';
         })
         chContent.classList.remove('_active');
         chContent.style.height = chContent.scrollHeight + 'px';
      })
   })
}
accordeon();