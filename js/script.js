const menuBtn = document.querySelector('.menu_icons')
const menu = document.querySelector('.menu_list')


if (menuBtn && menu) {
	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active')
		menu.classList.toggle('active')
	})
}