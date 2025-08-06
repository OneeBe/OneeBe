
// Система интернационализации для сайта
class I18n {
    constructor() {
        this.currentLanguage = this.detectLanguage();
        this.translations = {
            'ru': {
                // Navigation
                'leaders': 'Лидеры',
                'statistics': 'Статистика',
                'quests': 'Квесты',
                'achievements': 'Достижения',
                'clans': 'Кланы',
                'tournaments': 'Турниры',
                'shop': 'Магазин',
                'profile': 'Профиль',
                'login': 'Вход',
                'logout': 'Выйти',
                
                // Stats
                'level': 'Уровень',
                'kills': 'Киллы',
                'deaths': 'Смерти',
                'wins': 'Победы',
                'games': 'Игры',
                'kd_ratio': 'K/D',
                'win_rate': '% побед',
                'beds_broken': 'Кровати',
                'final_kills': 'Финальные киллы',
                'coins': 'Койны',
                'reputation': 'Репутация',
                
                // UI
                'search': 'Поиск...',
                'save': 'Сохранить',
                'cancel': 'Отмена',
                'edit': 'Редактировать',
                'delete': 'Удалить',
                'back': 'Назад',
                'next': 'Далее',
                'loading': 'Загрузка...',
                'error': 'Ошибка',
                'success': 'Успешно',
                
                // Profile
                'my_profile': 'Мой профиль',
                'edit_profile': 'Редактировать профиль',
                'social_networks': 'Социальные сети',
                'about_player': 'О игроке',
                'gaming_preferences': 'Игровые предпочтения',
                'personal_info': 'Личная информация',
                
                // Time
                'created_at': 'Регистрация',
                'last_updated': 'Последняя активность',
                'birthday': 'День рождения'
            },
            'ua': {
                // Navigation
                'leaders': 'Лідери',
                'statistics': 'Статистика',
                'quests': 'Квести',
                'achievements': 'Досягнення',
                'clans': 'Клани',
                'tournaments': 'Турніри',
                'shop': 'Магазин',
                'profile': 'Профіль',
                'login': 'Вхід',
                'logout': 'Вийти',
                
                // Stats
                'level': 'Рівень',
                'kills': 'Вбивства',
                'deaths': 'Смерті',
                'wins': 'Перемоги',
                'games': 'Ігри',
                'kd_ratio': 'K/D',
                'win_rate': '% перемог',
                'beds_broken': 'Ліжка',
                'final_kills': 'Фінальні вбивства',
                'coins': 'Монети',
                'reputation': 'Репутація',
                
                // UI
                'search': 'Пошук...',
                'save': 'Зберегти',
                'cancel': 'Скасувати',
                'edit': 'Редагувати',
                'delete': 'Видалити',
                'back': 'Назад',
                'next': 'Далі',
                'loading': 'Завантаження...',
                'error': 'Помилка',
                'success': 'Успішно',
                
                // Profile
                'my_profile': 'Мій профіль',
                'edit_profile': 'Редагувати профіль',
                'social_networks': 'Соціальні мережі',
                'about_player': 'Про гравця',
                'gaming_preferences': 'Ігрові налаштування',
                'personal_info': 'Особиста інформація',
                
                // Time
                'created_at': 'Реєстрація',
                'last_updated': 'Остання активність',
                'birthday': 'День народження'
            },
            'en': {
                // Navigation
                'leaders': 'Leaders',
                'statistics': 'Statistics',
                'quests': 'Quests',
                'achievements': 'Achievements',
                'clans': 'Clans',
                'tournaments': 'Tournaments',
                'shop': 'Shop',
                'profile': 'Profile',
                'login': 'Login',
                'logout': 'Logout',
                
                // Stats
                'level': 'Level',
                'kills': 'Kills',
                'deaths': 'Deaths',
                'wins': 'Wins',
                'games': 'Games',
                'kd_ratio': 'K/D',
                'win_rate': 'Win Rate',
                'beds_broken': 'Beds',
                'final_kills': 'Final Kills',
                'coins': 'Coins',
                'reputation': 'Reputation',
                
                // UI
                'search': 'Search...',
                'save': 'Save',
                'cancel': 'Cancel',
                'edit': 'Edit',
                'delete': 'Delete',
                'back': 'Back',
                'next': 'Next',
                'loading': 'Loading...',
                'error': 'Error',
                'success': 'Success',
                
                // Profile
                'my_profile': 'My Profile',
                'edit_profile': 'Edit Profile',
                'social_networks': 'Social Networks',
                'about_player': 'About Player',
                'gaming_preferences': 'Gaming Preferences',
                'personal_info': 'Personal Info',
                
                // Time
                'created_at': 'Registration',
                'last_updated': 'Last Activity',
                'birthday': 'Birthday'
            }
        };
        
        this.init();
    }

    detectLanguage() {
        // Check localStorage first
        const saved = localStorage.getItem('selectedLanguage');
        if (saved && this.translations[saved]) {
            return saved;
        }

        // Auto-detect from browser
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('uk') || browserLang.startsWith('ua')) {
            return 'ua';
        } else if (browserLang.startsWith('en')) {
            return 'en';
        } else {
            return 'ru'; // Default
        }
    }

    init() {
        this.createLanguageSwitcher();
        this.applyTranslations();
    }

    createLanguageSwitcher() {
        const userPanel = document.querySelector('.user-panel');
        if (!userPanel) return;

        const languageDropdown = document.createElement('div');
        languageDropdown.className = 'dropdown';
        languageDropdown.innerHTML = `
            <a class="user-panel-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" title="Язык" aria-label="Выбор языка">
                <i class="fas fa-globe me-1"></i><span class="current-lang">${this.getCurrentLanguageFlag()}</span>
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item language-option" href="#" data-lang="ru">
                    <i class="me-2">🇷🇺</i>Русский
                </a></li>
                <li><a class="dropdown-item language-option" href="#" data-lang="ua">
                    <i class="me-2">🇺🇦</i>Українська
                </a></li>
                <li><a class="dropdown-item language-option" href="#" data-lang="en">
                    <i class="me-2">🇺🇸</i>English
                </a></li>
            </ul>
        `;

        // Insert before the first child of user panel
        userPanel.insertBefore(languageDropdown, userPanel.firstChild);

        // Add event listeners
        languageDropdown.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                this.changeLanguage(e.target.closest('[data-lang]').dataset.lang);
            });
        });
    }

    getCurrentLanguageFlag() {
        const flags = { 'ru': '🇷🇺', 'ua': '🇺🇦', 'en': '🇺🇸' };
        return flags[this.currentLanguage] || '🇷🇺';
    }

    changeLanguage(lang) {
        if (!this.translations[lang]) return;

        this.currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
        
        // Update flag in UI
        const flagElement = document.querySelector('.current-lang');
        if (flagElement) {
            flagElement.textContent = this.getCurrentLanguageFlag();
        }

        this.applyTranslations();

        // Announce language change to screen readers
        if (window.announceToScreenReader) {
            const langNames = { 'ru': 'русский', 'ua': 'українська', 'en': 'English' };
            window.announceToScreenReader(`Язык изменен на ${langNames[lang]}`);
        }
    }

    translate(key, fallback = null) {
        const translation = this.translations[this.currentLanguage]?.[key];
        return translation || fallback || key;
    }

    applyTranslations() {
        // Translate elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            const translation = this.translate(key);
            
            if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'search')) {
                element.placeholder = translation;
            } else if (element.hasAttribute('title')) {
                element.title = translation;
            } else if (element.hasAttribute('aria-label')) {
                element.setAttribute('aria-label', translation);
            } else {
                element.textContent = translation;
            }
        });

        // Update document language
        document.documentElement.lang = this.currentLanguage === 'ua' ? 'uk' : this.currentLanguage;
    }
}

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof window.bedwarsI18n === 'undefined') {
        window.bedwarsI18n = new I18n();
    }
});

// Export for use in other scripts
window.I18n = I18n;
