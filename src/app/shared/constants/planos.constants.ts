import { Plano } from '../../core/models/plano.model';
import { environment } from '../../../environments/environment';

export const PLANOS: Plano[] = [
  {
    id: 'basico',
    nome: 'Básico',
    descricao: 'Ideal para quem está começando',
    preco: 199.90,
    stripePriceId: environment.stripePriceIdBasico,
    destaque: false,
    recursos: [
      'Até 3 obras simultâneas',
      'Gestão de custos completa',
      'Relatórios básicos',
      '1 usuário'
    ]
  },
  {
    id: 'profissional',
    nome: 'Profissional',
    descricao: 'Para construtoras em crescimento',
    preco: 499.90,
    stripePriceId: environment.stripePriceIdProfissional,
    destaque: true,
    recursos: [
      'Obras ilimitadas',
      'Todos os módulos',
      'Relatórios completos',
      'Até 5 usuários',
      'Controle de acesso por grupos'
    ]
  }
];
