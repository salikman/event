import { Popup } from '../helpers/popup';

export class BurgerMenu extends Popup {
	constructor() {
		super();
		this.burgerButton = document.querySelector('.icon-menu');
		this.navLinks = document.querySelectorAll('.header__menu a');
	}

	/**
	 * Initialize the menu functionality.
	 */
	init() {
		if (this.burgerButton) {
			document.addEventListener('click', ({ target }) => {
				if (target.closest('.icon-menu')) {
					this.html.classList.toggle('menu-open');
					this.toggleBodyLock(this.isMenuOpen);
				}
			});
		}

		// Add event listeners to the navigation links to close the menu
		if (this.navLinks.length > 0) {
			this.navLinks.forEach(link => {
				link.addEventListener('click', () => {
					this.menuClose();
				});
			});
		}
	}

	/**
	 * Open the menu.
	 */
	menuOpen() {
		this.toggleBodyLock(true);
		this.html.classList.add('menu-open');
	}

	/**
	 * Close the menu.
	 */
	menuClose() {
		this.toggleBodyLock(false);
		this.html.classList.remove('menu-open');
	}

	get isMenuOpen() {
		return this.html.classList.contains('menu-open');
	}
}
