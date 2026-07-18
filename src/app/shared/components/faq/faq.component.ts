import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  perguntas = [
    {
      pergunta: 'Posso cancelar minha assinatura a qualquer momento?',
      resposta: 'Sim. Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento pela área de configurações da sua conta. O acesso continua ativo até o fim do período já pago.'
    },
    {
      pergunta: 'Quantas obras posso gerenciar simultaneamente?',
      resposta: 'No plano Básico você pode gerenciar até 5 obras ativas ao mesmo tempo. No plano Profissional o número de obras é ilimitado.'
    },
    {
      pergunta: 'Meus dados ficam seguros?',
      resposta: 'Sim. Utilizamos ambientes isolados por empresa (multi-tenant), criptografia em trânsito (HTTPS/TLS) e backups diários automáticos. Seus dados nunca são compartilhados com outras empresas.'
    },
    {
      pergunta: 'Preciso instalar algum software?',
      resposta: 'Não. O Custo Obra Pro é 100% web. Funciona em qualquer navegador moderno — no computador, tablet ou celular — sem instalação.'
    },
    {
      pergunta: 'O pagamento é seguro? Quais formas são aceitas?',
      resposta: 'O pagamento é processado pelo Stripe, líder mundial em pagamentos online. Aceitamos cartões de crédito (Visa, Mastercard, Amex). Os dados do cartão nunca passam pelos nossos servidores.'
    },
    {
      pergunta: 'Existe período de teste gratuito?',
      resposta: 'Sim. Oferecemos 14 dias gratuitos para novos usuários. Basta criar sua conta e escolher um plano — nenhum cartão é cobrado durante o período de teste.'
    }
  ];
}
