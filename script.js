const btnAdd = document.querySelector('.js-btn-add');

btnAdd.addEventListener('click', () => {
  const task = document.querySelector('.js-input-task').value;
  const taskContent = document.querySelector('.task__content');

  taskContent.insertAdjacentHTML('afterbegin', `
  <div class="task__item js-item">
      <span class="text">${task}</span>
      <button class="btn js-btn-menu">...</button>
      <div class="task-modal js=modal">
        <p class="modification">изменить</p>
        <p class="deleted">удалить</p>
      </div>
    </div>
  `);

  document.querySelector('.js-input-task').value = ' ';

  const item = document.querySelectorAll('.js-item');

  item.forEach(item => {
    // открывать модалку
    const menuBtn = item.querySelector('.js-btn-menu');

    if (menuBtn.classList.contains('listener-added')) return;

    menuBtn.classList.add('listener-added');
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('activeTask');
    });

    // удалить элемент при клики
    const delTask = item.querySelector('.deleted');
    delTask.addEventListener('click', () => {

      delTask.parentNode.parentNode.remove(item.parentNode);

    });

    // изменяем <p> а инпут
    const btnMenu = item.querySelector('.js-btn-menu');
    const modification = item.querySelector('.modification');
    modification.addEventListener('click', () => {
      btnMenu.classList.remove('activeTask');
      const span = item.querySelector('.text');
      const textModif = span.innerHTML;

      const input = span.outerHTML =
        `<div class="bloc-mod"><input class="input-sav" type="text" value="${textModif}">
          <button class="btn btn-save">V</button></div>`;

      const btnSave = document.querySelector('.btn-save');
      console.log(btnSave);

      btnSave.addEventListener('click', () => {
        const inputBlock = document.querySelector('.bloc-mod');
        const input = document.querySelector('.input-sav').value;
        const spanModif = inputBlock.outerHTML = `<span class="text">${input}</span>`;
        console.log(spanModif);
      })
    });
  });

});
