#!/bin/bash
# Деплой gromovaasya-wedding-site на GitHub Pages
# Запуск: bash deploy.sh

set -e

REPO_NAME="gromovaasya-wedding-site"
PROJECT_DIR="$HOME/.hermes/projects/сайты/свадебные-сайты/$REPO_NAME"

echo "🚀 Деплой свадебного сайта gromovaasya"
echo "========================================"

# Шаг 1: Проверка файлов
if [ ! -d "$PROJECT_DIR" ]; then
    echo "❌ Проект не найден: $PROJECT_DIR"
    exit 1
fi

cd "$PROJECT_DIR"
echo "✅ Проект найден ($(git log --oneline | wc -l) коммитов)"

# Шаг 2: GitHub username
GITHUB_USER=$(git config --global user.name 2>/dev/null || echo "")
if [ -z "$GITHUB_USER" ]; then
    echo "📝 Введите ваш GitHub username:"
    read -r GITHUB_USER
fi
echo "👤 GitHub: $GITHUB_USER"

# Шаг 3: Проверка remote
if git remote get-url origin >/dev/null 2>&1; then
    echo "✅ Remote origin уже настроен: $(git remote get-url origin)"
else
    echo "📦 Настраиваю remote origin..."
    git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git"
    echo "✅ Remote добавлен: $GITHUB_USER/$REPO_NAME"
fi

# Шаг 4: Push
echo "⬆️  Push в GitHub..."
git push -u origin main 2>/dev/null || {
    echo ""
    echo "❌ Push не удался. Возможные причины:"
    echo "  1. Репозиторий ещё не создан на GitHub"
    echo "  2. Нет доступа (нужен token)"
    echo ""
    echo "📋 Сделайте следующее:"
    echo "  1. Откройте https://github.com/new"
    echo "  2. Name: $REPO_NAME"
    echo "  3. Public ✅"
    echo "  4. Create repository"
    echo "  5. Вернитесь сюда и нажмите Enter"
    read -r
    git push -u origin main
}

echo ""
echo "✅ Файлы загружены!"
echo ""

# Шаг 5: GitHub Pages через API (если есть token)
if [ -n "$GITHUB_TOKEN" ]; then
    echo "🌐 Включаю GitHub Pages..."
    curl -s -X POST \
      "https://api.github.com/repos/$GITHUB_USER/$REPO_NAME/pages" \
      -H "Authorization: Bearer $GITHUB_TOKEN" \
      -H "Accept: application/vnd.github+json" \
      -d '{"source":"legacy","branch":"main","path":"/"}' 2>/dev/null || true
    
    echo "⏳ GitHub Pages включён (активация 2-3 минуты)"
else
    echo "🌐 GitHub Pages — сделайте вручную:"
    echo "  1. https://github.com/$GITHUB_USER/$REPO_NAME/settings/pages"
    echo "  2. Source → Deploy from a branch → main → / → Save"
fi

echo ""
echo "========================================"
echo "🎉 Сайт будет доступен по адресу:"
echo "   https://$GITHUB_USER.github.io/$REPO_NAME/"
echo "========================================"
echo ""
echo "📋 Следующие шаги:"
echo "  1. Formspree: https://formspree.io → создать форму → заменить [FORMSPREE_ID] в index.html"
echo "  2. Яндекс.Метрика: https://metrika.yandex.ru → создать счётчик → раскомментировать блок в index.html"
echo "  3. Проверить сайт на телефоне"
echo "  4. Добавить ссылку в Авито/Telegram/Instagram"
