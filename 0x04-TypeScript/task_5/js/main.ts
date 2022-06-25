interface MajorCredits {
    credits: number;
    readonly brand: any;
  }

  interface MinorCredits {
    credits: number;
    readonly brand: any;
  }

  const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): number => {
    return subject1.credits + subject2.credits;
  }

  const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): number => {
    return subject1.credits + subject2.credits;
  }
