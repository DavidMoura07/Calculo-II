# Calculo-II
Lembretes de Cálculo II, mais especificamente Séries e Sequencias


## Sessão 11.2 SÉRIES
- Série Geométrica: (a+ar+ar^2+...+ar^n)   Converge se |r| < 1 (-1 < r < 1), sua soma é **a/(1-r)**
- Soma telescópica: ex.: Σ i=1 Até n: 1/(i(i+1)) (fração cujo denominador é uma equação)
  - Escreva a equação na forma (1-x')(1-x")
  - Aplique frações parciais
  - Aplique o somatório para um Sn e simplifique (aparecerão termos que se cancelam infinitamente, por isso limite a n termos)
  - Passe o limite para encontrar a soma no infinito ou substitua n pelo termo desejado e calcule a equação
- P-Série (1/n^p), converge se p>1, diverge se p<=1;
- Série Harmônica: 1/n, diverge (P-Série, p=1)
- Teste da divergêmcia: Se lim **An != 0** então a série **diverge**, se lim **An == 0** **NADA POSSO AFIRMAR**
- Se SOMATÓRIO a*n* e SOMATÓRIO b*n* convergem, então SOMATORIO Ca*n* (onde C é uma constante) converge, bem como, SOMATÓRIO (a*n* + b*n*) e SOMATÓRIO (a*n* - b*n*)  (DICA: quebre o somatório em cada termo) 

## Sessão 11.3 TESTE DA INTEGRAL E ESTIMATIVAS DE SOMAS

- Teste da integral: Funciona para toda e qualquer série, pórem costuma ser o mais difícil de se resolver, por tanto deixe-o como ultima opção. 
- Consiste em integrar o termo An, se a integral converge o somatório converge, se a integral diverge o somatório diverge

## Sessão 11.4 OS TESTES DE COMPARAÇÃO

- Considere estes dois somatórios: ΣAn e ΣBn sendo n=1 até ∞ e An < Bn, neste caso se An **(a menor) diverge** Bn **(a maior) também diverge**, se Bn **(a maior) converge**, An **(a menor) também converge**.
- Agora se a **menor convergir NADA podemos dizer da maior** e **se a maior divergir, NADA podemos dizer da menor**, nesses casos o melhor e aplicar o TESTE DE COMPARAÇÃO DE LIMITE.
- TESTE DE COMPARAÇÃO DE LIMITE: Aplique Lim An/Bn ou Lim Bn/An se o resultado for um número finito L > 0 então ou ambas convergem ou ambas divergem, daí é só analizar uma delas, a que você escolheu para comparar, e verificar se converge ou diverge, por tanto, escolha algo que vc saiba dizer se converge ou diverge facilmente. 
