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
  // Dados dos serviços
  const services = [
    { name: "Serviço de Transporte", description: "Transporte de carga para todo o Brasil", price: "R$ 500,00" },
    { name: "Serviço de Logística", description: "Logística integrada para otimização de processos", price: "R$ 800,00" },
    { name: "Serviço de Rastreamento", description: "Rastreamento em tempo real da carga", price: "R$ 300,00" },
    { name: "Serviço de Documentação", description: "Emissão de documentos fiscais e contratuais", price: "R$ 200,00" }
  ];

  // Selecionando o tbody da tabela
  const tbody = document.getElementById('serviceTable');

  // Iterando sobre os dados para criar as linhas da tabela
  services.forEach(service => {
    const row = document.createElement('tr');

    // Criando as células para cada coluna
    const nameCell = document.createElement('td');
    nameCell.textContent = service.name;

    const descCell = document.createElement('td');
    descCell.textContent = service.description;

    const priceCell = document.createElement('td');
    priceCell.textContent = service.price;

    // Adicionando as células à linha
    row.appendChild(nameCell);
    row.appendChild(descCell);
    row.appendChild(priceCell);

    // Adicionando a linha ao tbody
    tbody.appendChild(row);
  });
});