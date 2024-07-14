<template>
    <section>
      <h2>Serviços</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Serviço 1</td>
            <td>Descrição do Serviço 1</td>
            <td>R$ 100,00</td>
          </tr>
          <tr>
            <td>Serviço 2</td>
            <td>Descrição do Serviço 2</td>
            <td>R$ 200,00</td>
          </tr>
        </tbody>
      </table>
    </section>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    background-color: #f2f2f2;
  }
  </style>