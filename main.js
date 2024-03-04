// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
        specimenNum: specimenNum,
        dna: dna,
        mutate() {
            const bases = ['A', 'T', 'C', 'G'];
            const randomIndex = Math.floor(Math.random() * this.dna.length);
            let newBase = bases[Math.floor(Math.random() * bases.length)];
            while (newBase === this.dna[randomIndex]) {
                newBase = bases[Math.floor(Math.random() * bases.length)];
            }
            this.dna[randomIndex] = newBase;
            return this.dna;
        },
        compareDNA(otherOrganism) {
            const identicalBases = this.dna.filter((base, index) => base === otherOrganism.dna[index]);
            const percentIdentical = (identicalBases.length / this.dna.length) * 100;
            return percentIdentical.toFixed(2);
        },
        willLikelySurvive() {
            const cOrGCount = this.dna.filter(base => base === 'C' || base === 'G').length;
            const survivalRate = (cOrGCount / this.dna.length) * 100;
            return survivalRate >= 60;
        },
        complementStrand() {
            const complementBases = {
                'A': 'T',
                'T': 'A',
                'C': 'G',
                'G': 'C'
            };
            const complementaryDNA = this.dna.map(base => complementBases[base]);
            return complementaryDNA;
        }
    };
};

const organism1 = pAequorFactory(1, ['A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C']);
const organism2 = pAequorFactory(2, ['T', 'A', 'C', 'G', 'T', 'A', 'C', 'G', 'T', 'A', 'C', 'G', 'T', 'A', 'C']);

console.log(organism1);
console.log(organism2);
console.log(organism1.compareDNA(organism2));
console.log(organism1.willLikelySurvive());
console.log(organism2.willLikelySurvive());
console.log(organism1.complementStrand());
console.log(organism2.complementStrand());

const bases = ['A', 'C', 'G', 'T'];

const paequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const currentBase = this.dna[randomIndex];
      let newBase = currentBase;
      while (newBase === currentBase) {
        newBase = bases[Math.floor(Math.random() * bases.length)];
      }
      this.dna = this.dna.substring(0, randomIndex) + newBase + this.dna.substring(randomIndex + 1);
      return this.dna;
    }
  };
};

const specimen = pAequorFactory(1, 'ATCGTAC');
console.log(specimen.dna); // Output: ATCGTAC
specimen.mutate();
console.log(specimen.dna); // Output: ATCGTGC (mutation occurred)

const pequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randomBaseIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = this.dna[randomBaseIndex];
      const possibleBases = ['A', 'T', 'C', 'G'];
      do {
        newBase = possibleBases[Math.floor(Math.random() * possibleBases.length)];
      } while (newBase === this.dna[randomBaseIndex]);
      this.dna = this.dna.slice(0, randomBaseIndex) + newBase + this.dna.slice(randomBaseIndex + 1);
    },
    compareDNA(otherOrganism) {
      let identicalBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          identicalBases++;
        }
      }
      const percentageIdentical = ((identicalBases / this.dna.length) * 100).toFixed(2);
      console.log(`Specimen ${this.specimenNum} and specimen ${otherOrganism.specimenNum} have ${percentageIdentical}% DNA in common.`);
    }
  };
};

const organism3 = pAequorFactory(1, 'ATGCTAGCTAGCTAGCTA');
const organism4 = pAequorFactory(2, 'ATGCTAGCTTGCTAGCTA');
organism1.compareDNA(organism2);

const pquorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randomBaseIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = this.dna[randomBaseIndex];
      while (newBase === this.dna[randomBaseIndex]) {
        newBase = getRandomBase();
      }
      this.dna[randomBaseIndex] = newBase;
      return this.dna;
    },
    compareDNA(other) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === other.dna[i]) {
          count++;
        }
      }
      const percentage = (count / this.dna.length) * 100;
      console.log(`Specimen #${this.specimenNum} and Specimen #${other.specimenNum} have ${percentage.toFixed(2)}% DNA in common.`);
    },
    willLikelySurvive() {
      const countCG = this.dna.filter(base => base === 'C' || base === 'G').length;
      const percentageCG = (countCG / this.dna.length) * 100;
      return percentageCG >= 60;
    }
  };
};

const getRandomBase = () => {
  const bases = ['A', 'T', 'C', 'G'];
  return bases[Math.floor(Math.random() * bases.length)];
};

const specimen1 = pAequorFactory(1, ['A', 'C', 'T', 'G', 'G', 'C', 'T', 'A', 'A', 'G']);
console.log(specimen1.willLikelySurvive()); // Example output: true
const specimen2 = pAequorFactory(2, ['A', 'T', 'C', 'G', 'G', 'C', 'T', 'A', 'A', 'G']);
console.log(specimen2.willLikelySurvive()); // Example output: false

const peaquorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = '';
      do {
        newBase = randomDNA();
      } while (this.dna[randomIndex] === newBase);
      this.dna[randomIndex] = newBase;
    },
    compareDNA(otherOrganism) {
      let commonCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          commonCount++;
        }
      }
      const percentage = ((commonCount / this.dna.length) * 100).toFixed(2);
      console.log(`Specimen #${this.specimenNum} and specimen #${otherOrganism.specimenNum} have ${percentage}% DNA in common.`);
    },
    willLikelySurvive() {
      const cAndGCount = this.dna.filter(base => base === 'C' || base === 'G').length;
      const survivalRate = (cAndGCount / this.dna.length) * 100;
      return survivalRate >= 60;
    }
  };
};

// Function to generate a random DNA base
const randomDNA = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * dnaBases.length)];
};

// Create 30 instances of pAequor that can survive in their natural environment
const pAequorInstances = [];
let specimenCounter = 1;
while (pAequorInstances.length < 30) {
  const newDNA = Array.from({ length: 15 }, randomDNA);
  const newOrganism = pAequorFactory(specimenCounter, newDNA);
  if (newOrganism.willLikelySurvive()) {
    pAequorInstances.push(newOrganism);
    specimenCounter++;
  }
}

console.log(pAequorInstances);
