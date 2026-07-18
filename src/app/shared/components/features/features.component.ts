import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features = [
    {
      icon: 'bi-building',
      title: 'Gestão de Obras',
      desc: 'Centralize todas as suas obras em um único painel. Acompanhe progresso, prazos e status em tempo real.'
    },
    {
      icon: 'bi-calendar3',
      title: 'Cronograma Inteligente',
      desc: 'Monte cronogramas detalhados por etapa, com alertas automáticos de desvios e replanejamento ágil.'
    },
    {
      icon: 'bi-receipt',
      title: 'Controle de Custos',
      desc: 'Registre materiais, mão de obra e serviços. Compare orçado x realizado com relatórios visuais.'
    },
    {
      icon: 'bi-people',
      title: 'Equipe & Fornecedores',
      desc: 'Gerencie equipes próprias e terceiros em um só lugar. Histórico completo por colaborador e fornecedor.'
    },
    {
      icon: 'bi-bar-chart-line',
      title: 'Relatórios & KPIs',
      desc: 'Dashboards executivos com indicadores-chave: CPI, SPI, margem, desvio de prazo e muito mais.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Segurança & Multi-empresa',
      desc: 'Ambientes isolados por empresa (multi-tenant). Controle de acesso por papel e auditoria de ações.'
    }
  ];
}
