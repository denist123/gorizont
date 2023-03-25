let accordeon = () => {
   const chItems = document.querySelectorAll('._label__item');
   chItems.forEach(item => {
      const chButton = item.querySelector('._label__title');
      const chContent = item.querySelector('._label__description');
      
      chButton.addEventListener('click', () => {
         chItems.forEach(item => {
            const chButton2 = item.querySelector('._label__title');
            const chContent2 = item.querySelector('._label__description');
            chButton2.classList.remove('active');
            chContent2.style.height = '';
         })
         chButton.classList.add('active');
         chContent.style.height = chContent.scrollHeight + 'px';
      })
   })
}
accordeon();