document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('navigation');
  const closeMenu = document.getElementById('close-menu');

  menuToggle.addEventListener('click', function () {
    navigation.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  closeMenu.addEventListener('click', function () {
    navigation.classList.remove('open');
    menuToggle.classList.remove('open');
  });

  window.addEventListener('click', function (event) {
    if (!event.target.closest('.header')) {
      navigation.classList.remove('open');
      menuToggle.classList.remove('open');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const readMoreButton = document.getElementById('read-more');
  const moreInfo = document.getElementById('more-info');

  readMoreButton.addEventListener('click', function () {
    moreInfo.classList.toggle('show');
    if (moreInfo.classList.contains('show')) {
      readMoreButton.textContent = 'Mostrar menos';
    } else {
      readMoreButton.textContent = 'Leia mais';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const services = [
    { name: "Serviço de Transporte", description: "Transporte de carga para todo o Brasil", price: "R$ 500,00" },
    { name: "Serviço de Logística", description: "Logística integrada para otimização de processos", price: "R$ 800,00" },
    { name: "Serviço de Rastreamento", description: "Rastreamento em tempo real da carga", price: "R$ 300,00" },
    { name: "Serviço de Documentação", description: "Emissão de documentos fiscais e contratuais", price: "R$ 200,00" }
  ];

  const tbody = document.getElementById('serviceTable');

  services.forEach(service => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = service.name;

    const descCell = document.createElement('td');
    descCell.textContent = service.description;

    const priceCell = document.createElement('td');
    priceCell.textContent = service.price;

    row.appendChild(nameCell);
    row.appendChild(descCell);
    row.appendChild(priceCell);

    tbody.appendChild(row);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formError = document.getElementById('formError');
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modalMessage');
  const closeModalButton = document.getElementById('closeModal');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    resetErrors();

    if (validateForm()) {
      setTimeout(() => {
        modalMessage.textContent = 'O formulário foi enviado com sucesso!';
        modal.style.display = 'flex';
        form.reset();
      }, 1000);
    }
  });

  closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  function validateForm() {
    let valid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent = 'Por favor, preencha seu nome.';
      valid = false;
    }
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Por favor, preencha seu e-mail.';
      valid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        valid = false;
      }
    }
    if (!messageInput.value.trim()) {
      messageError.textContent = 'Por favor, escreva uma mensagem.';
      valid = false;
    }

    if (!valid) {
      formError.textContent = 'Por favor, corrija os erros no formulário.';
    }

    return valid;
  }

  function resetErrors() {
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formError.textContent = '';
  }
});