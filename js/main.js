// Кастомный инпут типа password
const passwordFields = document.querySelectorAll('input[type="password"]');
passwordFields.forEach(function (field) {
  const togglePassword = field.nextElementSibling;
  togglePassword.addEventListener("click", function () {
    let type;
    if (field.getAttribute("type") === "password") {
      type = "text";
      togglePassword.classList.remove('_icon-hide-password');
      togglePassword.classList.add('_icon-check-password');
    } else {
      type = "password";
      togglePassword.classList.remove('_icon-check-password');
      togglePassword.classList.add('_icon-hide-password');
    }
    field.setAttribute("type", type);
  });
});

// Сайдбар
let SideBarMini = document.querySelector('.sidebar-mini');
let SideBarOpen = document.querySelector('.siderbar-open');
let BurgerMenu = document.querySelector('.sidebar__nav-btn');

BurgerMenu.addEventListener('click', () => {
  SideBarMini.classList.toggle('_active');
  SideBarOpen.classList.toggle('_active');
  BurgerMenu.classList.toggle('_active');
})



// Кастомный select
const dropdownBtn = document.querySelector('.dropdown__btn');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');
const dropdownInput = document.querySelector('.dropdown__input-hidden');

// Вешаем слушатель на кнопку. Добавляет / удаляем класс _active со списка (выпадашки)
dropdownBtn.addEventListener('click', (e) => {
  e.preventDefault();
  dropdownList.classList.toggle('_active');
})

// Выбор элемента списка. Записать выбранные значение. Закрыть выпадашку
dropdownItems.forEach(listItem => {
  listItem.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdownBtn.innerText = this.innerText;
    dropdownList.classList.remove('_active');
    dropdownInput.value = this.dataset.value;
  });
});

// Клик по области. Закрыть документ
document.addEventListener('click', function (e) {
  if (e.target !== dropdownBtn) {
    dropdownList.classList.remove('_active');
  };
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Tab' || e.key === 'Escape') {
    dropdownList.classList.remove('_active');
  }
})

// Авто увеличение размера текстовой области
textareas = document.querySelectorAll(".form-auth-item__textarea");

textareas.forEach(textarea => {
  textarea.addEventListener('input', autoResize, false);
  function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  }
});

// Скроллбар
// Array.prototype.forEach.call(
//   document.querySelectorAll('.siderbar-open'),
//   (el) => new SimpleBar(el)
// );

