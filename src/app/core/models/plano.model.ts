export interface Plano {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  stripePriceId: string;
  destaque: boolean;
  recursos: string[];
}
