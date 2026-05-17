/* Валидация формы + отправка */
(function() {
  'use strict';

  const form = document.getElementById('order-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.querySelector('#form-name');
    const contact = form.querySelector('#form-contact');

    // Простая валидация
    let valid = true;

    if (!name.value.trim()) {
      name.setCustomValidity('Пожалуйста, введите ваше имя');
      name.reportValidity();
      valid = false;
    } else {
      name.setCustomValidity('');
    }

    if (!contact.value.trim()) {
      contact.setCustomValidity('Пожалуйста, введите Telegram или телефон');
      contact.reportValidity();
      valid = false;
    } else {
      contact.setCustomValidity('');
    }

    if (!valid) return;

    const submitBtn = form.querySelector('.form__submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Отправляем...';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.style.display = 'none';
        success.style.display = 'block';
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      // Fallback: открыть Telegram
      const msg = encodeURIComponent(
        `Заявка с сайта!\nИмя: ${name.value}\nКонтакт: ${contact.value}\nШаблон: ${form.querySelector('#form-template')?.value || 'не выбран'}\nСообщение: ${form.querySelector('#form-message')?.value || ''}`
      );
      window.open(`https://t.me/gromovaasya?text=${msg}`, '_blank');
      form.style.display = 'none';
      success.style.display = 'block';
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
})();
