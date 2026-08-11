const translations = {
	ja: {
		siteTitle: "アプリ情報",
		siteDescription: "公開中のアプリに関する情報とプライバシーポリシーを掲載します。",
		privacyPolicy: "プライバシーポリシー",
		faq: "Q&A",
		contact: "機能リクエスト・お問い合わせ",
		languageLabel: "言語",
	},
	en: {
		siteTitle: "App Information",
		siteDescription: "Information and privacy policies for published apps.",
		privacyPolicy: "Privacy Policy",
		faq: "FAQ",
		contact: "Feature Requests & Contact",
		languageLabel: "Language",
	},
	"zh-Hans": {
		siteTitle: "应用信息",
		siteDescription: "已发布应用的信息和隐私政策。",
		privacyPolicy: "隐私政策",
		faq: "常见问题",
		contact: "功能请求和联系",
		languageLabel: "语言",
	},
	es: {
		siteTitle: "Información de la aplicación",
		siteDescription: "Información y políticas de privacidad de las aplicaciones publicadas.",
		privacyPolicy: "Política de privacidad",
		faq: "Preguntas frecuentes",
		contact: "Solicitudes y contacto",
		languageLabel: "Idioma",
	},
	ko: {
		siteTitle: "앱 정보",
		siteDescription: "공개된 앱의 정보와 개인정보처리방침을 제공합니다.",
		privacyPolicy: "개인정보처리방침",
		faq: "자주 묻는 질문",
		contact: "기능 요청 및 문의",
		languageLabel: "언어",
	},
	pt: {
		siteTitle: "Informações do aplicativo",
		siteDescription: "Informações e políticas de privacidade dos aplicativos publicados.",
		privacyPolicy: "Política de Privacidade",
		faq: "Perguntas frequentes",
		contact: "Solicitações e contato",
		languageLabel: "Idioma",
	},
	de: {
		siteTitle: "App-Informationen",
		siteDescription: "Informationen und Datenschutzerklärungen zu veröffentlichten Apps.",
		privacyPolicy: "Datenschutzerklärung",
		faq: "Häufige Fragen",
		contact: "Anfragen und Kontakt",
		languageLabel: "Sprache",
	},
	id: {
		siteTitle: "Informasi aplikasi",
		siteDescription: "Informasi dan kebijakan privasi untuk aplikasi yang dipublikasikan.",
		privacyPolicy: "Kebijakan Privasi",
		faq: "Pertanyaan umum",
		contact: "Permintaan fitur dan kontak",
		languageLabel: "Bahasa",
	},
};

const languageButtons = document.querySelectorAll("[data-language-button]");
const localizedElements = document.querySelectorAll("[data-i18n]");
const localizedContent = document.querySelectorAll("[data-i18n-content]");
const localizedAriaLabels = document.querySelectorAll("[data-i18n-aria-label]");
const languageLinks = document.querySelectorAll("[data-language-link]");
const supportedLanguages = new Set(Object.keys(translations));

function normalizeLanguage(language) {
	if (!language) {
		return null;
	}

	const normalizedLanguage = language.toLowerCase();
	if (normalizedLanguage.startsWith("zh")) {
		return "zh-Hans";
	}
	return normalizedLanguage.split("-")[0];
}

function updateLanguageLinks(language) {
	languageLinks.forEach((link) => {
		const url = new URL(link.href, window.location.href);
		url.searchParams.set("lang", language);
		link.href = url.href;
	});
}

function showLanguage(language, updateUrl) {
	const translation = translations[language];
	if (!translation) {
		return;
	}

	languageButtons.forEach((button) => {
		button.setAttribute(
			"aria-pressed",
			String(button.dataset.languageButton === language),
		);
	});
	localizedElements.forEach((element) => {
		element.textContent = translation[element.dataset.i18n];
	});
	localizedContent.forEach((element) => {
		element.content = translation[element.dataset.i18nContent];
	});
	localizedAriaLabels.forEach((element) => {
		element.setAttribute(
			"aria-label",
			translation[element.dataset.i18nAriaLabel],
		);
	});
	document.title = translation[document.body.dataset.pageTitle];
	document.documentElement.lang = language;
	updateLanguageLinks(language);

	if (updateUrl) {
		const url = new URL(window.location.href);
		url.searchParams.set("lang", language);
		window.history.replaceState(null, "", url);
	}
}

languageButtons.forEach((button) => {
	button.addEventListener("click", () => {
		showLanguage(button.dataset.languageButton, true);
	});
});

const requestedLanguage = normalizeLanguage(
	new URLSearchParams(window.location.search).get("lang"),
);
const preferredLanguage = normalizeLanguage(navigator.language);
const initialLanguage = supportedLanguages.has(requestedLanguage)
	? requestedLanguage
	: supportedLanguages.has(preferredLanguage)
		? preferredLanguage
		: "en";

showLanguage(initialLanguage, !supportedLanguages.has(requestedLanguage));
