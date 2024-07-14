<template>
  <section class="about">
    <div class="about-content">
      <h2>Sobre nós</h2>
      <p>
        A TruckMe é uma empresa dedicada a fornecer soluções logísticas inovadoras.
        <span :class="{ 'more-info': true, 'show': showMore }">
          Embarcadores, nós fazemos frete! Através da nossa Plataforma Web, garantimos serviço com todos os requisitos e
          obrigações da transportadora tradicional.
          <br><br>
          <strong>Nossos diferenciais:</strong>
          <ul>
            <li>Segurança da carga</li>
            <li>Compliance em negociações</li>
            <li>Contratos de Frete</li>
            <li>Custos Competitivos</li>
            <li>Performance</li>
            <li>Documentos Fiscais</li>
            <li>Monitoramento</li>
            <li>Entrega pelo App</li>
          </ul>
          <br>
          <strong>Vantagens:</strong>
          <ul>
            <li>Sem custos de implantação</li>
            <li>Paga pelo uso, conforme demanda</li>
            <li>Negociação direta com o transportador</li>
            <li>Sem adição de taxas ou mensalidades</li>
            <li>Sem contratos de fidelidade</li>
            <li>Economia de 10 a 15% na contratação de frete!</li>
          </ul>
          <blockquote>
            “Solução altamente intuitiva, ambiente amigável, que permite a fácil
            interação do usuário. Além da efetiva
            capacidade de reduzir custos no transporte, pelo fato de simplificar a atividades do frete”
            <br><br>
            <cite>Pedro Silva, Analista de Transportes</cite>
          </blockquote>
          <br>
          <strong>Como Usar:</strong>
          <ol>
            <li>Publicação da Oferta de Frete</li>
            <li>Negociação de Valores do Frete (2 rodadas)</li>
            <li>Aprovação do Transportador</li>
            <li>Autorização da Ordem de Coleta</li>
            <li>Pagamento do Frete</li>
            <li>Emissão de Documentos Fiscais (CT-e e MDF-e)</li>
            <li>Confirmação de Entrega</li>
          </ol>
        </span>
      </p>
      <button @click="toggleShowMore" class="read-more">{{ showMore ? 'Mostrar menos' : 'Leia mais' }}</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showMore = ref(false);

function toggleShowMore() {
  showMore.value = !showMore.value;
}
</script>

<style scoped>
.about {
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.about h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.about p {
  font-size: 1.6rem;
  line-height: 2;
  color: #555;
}

.more-info {
  display: none;
  transition: max-height 0.5s ease-out;
  overflow: hidden;
  max-height: 0;
}

.more-info.show {
  display: block;
  max-height: 1000px;
}

.about ul,
.about ol {
  text-align: left;
  margin-left: 2rem;
}

.about ul li,
.about ol li {
  margin-bottom: 0.5rem;
}

.read-more {
  background-color: #ff8c00;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  cursor: pointer;
  margin-top: 1.5rem;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.read-more:hover {
  background-color: #f68d00;
}
</style>