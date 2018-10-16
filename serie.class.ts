export class Serie {
  // true = converge  false = diverge
  convergeOuDiverge(serie): boolean {
    // SERIE GEOMETRICA: ar + ar² + ar³ + ... + ar^n
    if (this.ehGeometrica(serie)) {
      // |r| < 1 == converge
      return this.mod(this.retornaRazao(serie)) < 1 ? true : false;
    } else if (
      this.lim(this.retornaSequencia(serie), "infinito") != 0 ||
      this.lim(this.retornaSequencia(serie), "infinito") == null
    ) {
      return false; //TESTE DA DIVERGENCIA
    } else {
      console.log("nada posso afirmar"); // por enquanto...

      if (this.ehPserie(serie) && this.retornaP(serie) < 1) {
        return true;
      } else {
        // P-SERIE: 1/n^p == n^(-p)
        this.retornaP(serie) === 1
          ? console.log("SERIE HARMONICA")
          : console.log("P-SERIE");
        return false;
      }

      // separa uma serie em c[], an[] ex.: SERIE(4(3/(n+1)) + 3(1/n)) => c[0] = 4 , c[1] = 3;  an[0] = 3/(n+1), an[1] = 1/n
      let termos: Termos = this.retornaTermos(serie);
      let i = 0;
      // TEOREMA 8, PAG 657
      termos.an.forEach(termo => {
        // se todos os termos convergem a serie converge, se 1 diverge a serie diverge
        if (!this.convergeOuDiverge(termo)) {
          return false;
        }
        i++;
      });
      if (termos.an.length === i) {
        return true;
      }
    }
  }

  ehGeometrica(serie): boolean {
    return true;
  }

  mod(n): number {
    n < 0 ? (n *= -1) : (n = n);
    return n;
  }

  retornaRazao(serie): number {
    return 1;
  }

  lim(func, limit) {
    return null;
  }

  retornaSequencia(serie) {
    let an = serie;
    return an;
  }

  ehPserie(serie): boolean {
    return true;
  }

  retornaP(serie): number {
    let p = 1;
    return p;
  }

  retornaTermos(serie) {
    let c: string[];
    let an: string[];
    return new Termos(c, an);
  }
}

export class Termos {
  constructor(c: string[], an: string[]) {
    this.c = c;
    this.an = an;
  }
  readonly c: string[];
  readonly an: string[];
}
