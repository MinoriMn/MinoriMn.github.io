const languageButtons = document.querySelectorAll("[data-language-button]");
const languagePanels = document.querySelectorAll("[data-language-panel]");
const supportedLanguages = new Set(
	Array.from(languagePanels, (panel) => panel.dataset.languagePanel),
);

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

const browserLanguage = navigator.language.toLowerCase();
const preferredLanguage = browserLanguage.startsWith("zh")
	? "zh-Hans"
	: browserLanguage.split("-")[0];

showLanguage(supportedLanguages.has(preferredLanguage) ? preferredLanguage : "en");
