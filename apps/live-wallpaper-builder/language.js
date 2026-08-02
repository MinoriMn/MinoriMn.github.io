const languageButtons = document.querySelectorAll("[data-language-button]");
const languagePanels = document.querySelectorAll("[data-language-panel]");

function showLanguage(language) {
	languagePanels.forEach((panel) => {
		panel.hidden = panel.dataset.languagePanel !== language;
	});
	languageButtons.forEach((button) => {
		button.setAttribute(
			"aria-pressed",
			String(button.dataset.languageButton === language),
		);
	});
	document.documentElement.lang = language;
}

languageButtons.forEach((button) => {
	button.addEventListener("click", () => showLanguage(button.dataset.languageButton));
});

showLanguage(navigator.language.toLowerCase().startsWith("ja") ? "ja" : "en");
