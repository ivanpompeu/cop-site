# cop-site

Site institucional do Custo Obra Pro, a parte pública. Angular 19 · Bootstrap.
É onde ficam a apresentação do produto, os planos e o botão de entrar no sistema.

## O que você precisa instalado

Node 20+ e npm. O Angular CLI vem nas dependências, então use `npx ng`.

```bash
npm install
```

## Rodar

```bash
npx ng serve
```
Sobe em `http://localhost:4200`. Se o `cop-app` já estiver nessa porta, o Angular
oferece outra.

## Gerar a versão de produção

```bash
npx ng build --configuration production
```
A saída fica em `dist/cop-site/browser/`, que é o conteúdo copiado para o
servidor.

## A marca

Os arquivos ficam em `public/` e são servidos na raiz do site:

| Arquivo | Onde é usado |
|---|---|
| `logo.png` | assinatura horizontal **em negativo**, para a barra escura |
| `logo-vertical.png` | assinatura vertical em negativo, celular |
| `logo-fundo-claro.png` | assinatura horizontal colorida, para fundo claro |
| `logo-simbolo.png` | só o símbolo |
| `favicon.ico` | ícone da aba |

🔴 **A barra do topo usa `--cop-navy`, que é exatamente a mesma cor do quadrado
da marca.** Na versão colorida o "CUSTO OBRA" desaparece no fundo. Por isso ali
entra a versão com o nome em branco, conforme a regra de aplicação sobre fundos
escuros do manual de identidade.

Para qualquer peça com fundo claro, use `logo-fundo-claro.png`.

## Cores

Definidas em `src/styles.scss` e já correspondem ao manual de identidade:

```
--cop-navy      #2D2D3D
--cop-blue      #0DADE4
--cop-blue-mid  #0CA0D3
--cop-blue-dark #1B506B
```

## Limitações conhecidas

- Existe um único arquivo de teste, o padrão gerado pelo Angular. Não há teste
  escrito para nada do site.
- Não há lint configurado.
- O build emite o aviso `4 rules skipped due to selector errors`. É antigo e não
  impede a geração.
