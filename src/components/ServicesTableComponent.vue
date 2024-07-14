<template>
  <section class="services">
    <h2>Nossos Serviços</h2>
    <div class="table-container">
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
            <td>Serviço de Transporte</td>
            <td>Transporte de carga para todo o Brasil</td>
            <td>R$ 500,00</td>
          </tr>
          <tr>
            <td>Serviço de Logística</td>
            <td>Logística integrada para otimização de processos</td>
            <td>R$ 800,00</td>
          </tr>
          <tr>
            <td>Serviço de Rastreamento</td>
            <td>Rastreamento em tempo real da carga</td>
            <td>R$ 300,00</td>
          </tr>
          <tr>
            <td>Serviço de Documentação</td>
            <td>Emissão de documentos fiscais e contratuais</td>
            <td>R$ 200,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 1.2rem;
  text-align: center;
}

.table-container {
  max-width: 800px;
  margin: 25px auto;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #333;
}

td {
  background-color: #fff;
  color: #666;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

@media (max-width: 768px) {
  .table-container {
    overflow-x: auto;
  }
}
</style>