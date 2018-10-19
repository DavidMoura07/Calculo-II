# Calculo-II
Lembretes de Cálculo II, mais especificamente Séries e Sequencias


## Sessão 11.2 SÉRIES
- Série Geométrica: tem a forma Σar^(n-1) ou Σar^n Ex.: (a+ar+ar^2+...+ar^n)
  - Converge se |r| < 1 (-1 < r < 1), sua soma é **a/(1-r)**
- Soma telescópica: ex.: Σ i=1 Até n: 1/(i(i+1)) (fração cujo denominador é uma equação)
  - Escreva a equação na forma (1-x')(1-x")
  - Aplique frações parciais
  - Aplique o somatório para um Sn e simplifique (aparecerão termos que se cancelam infinitamente, por isso limite a n termos)
  - Passe o limite para encontrar a soma no infinito ou substitua n pelo termo desejado e calcule a equação
- P-Série (1/n^p), converge se p>1, diverge se p<=1;
- Série Harmônica: 1/n, diverge (P-Série, p=1)
- Teste da divergêmcia: Se lim **An != 0** então a série **diverge**, se lim **An == 0** **NADA POSSO AFIRMAR**
- Se Σa*n* e Σb*n* convergem, então ΣCa*n* (onde C é uma constante) converge, bem como, Σ(a*n* + b*n*) e Σ(a*n* - b*n*)  (DICA: quebre o somatório em cada termo) 

## Sessão 11.3 TESTE DA INTEGRAL E ESTIMATIVAS DE SOMAS

- Teste da integral: Funciona para toda e qualquer série, pórem costuma ser o mais difícil de se resolver, por tanto deixe-o como ultima opção. 
- Consiste em integrar o termo An, se a integral converge o somatório converge, se a integral diverge o somatório diverge

## Sessão 11.4 OS TESTES DE COMPARAÇÃO

- Considere estes dois somatórios: ΣAn e ΣBn sendo n=1 até ∞ e An < Bn, neste caso se An **(a menor) diverge** Bn **(a maior) também diverge**, se Bn **(a maior) converge**, An **(a menor) também converge**.
- Agora se a **menor convergir NADA podemos dizer da maior** e **se a maior divergir, NADA podemos dizer da menor**, nesses casos o melhor e aplicar o TESTE DE COMPARAÇÃO DE LIMITE.
- TESTE DE COMPARAÇÃO DE LIMITE: Aplique Lim An/Bn ou Lim Bn/An se o resultado for um número finito L > 0 então ou ambas convergem ou ambas divergem, daí é só analizar uma delas, a que você escolheu para comparar, e verificar se converge ou diverge, por tanto, escolha algo que vc saiba dizer se converge ou diverge facilmente. 

_OBS: o limite deve ser maior do que zero pois se for igual, caso invertamos de An/Bn para Bn/An o limite irá para ∞_

## Sessão 11.5 SERIES ALTERNADAS

- Se uma série tem a forma an = (-1)^(n-1)bn ou (-1)^n bn então é uma série alternada
- bn = |an|
- Para saber se este tipo de série converge basta verificar dois pontos: 
  - b(n+1) <= bn
  - lim bn = 0
  - Caso este dois pontos não sejam atendidos a série diverge
  - Ex: (-1)^(n-1)/n
    - Se fosse somente 1/n teríamos uma série harmônica, mas como ao invés de 1 temos (-1)^(n-1) isto a torna uma série hamronica alternada, cujo bn = |a| = 1/n
    - Deste modo b(n+1) = 1/(n+1) <= bn, atendendo ao primeiro requisito.
    - E lim bn = lim 1/n, quando n-> ∞ = 0, atendendo ao segundo requisito.
    - Por tanto a série converge.
