export class HSLColor {
  constructor(
      public hue: number,
      public saturation: number,
      public lightness: number
  ) {
      this.hue = Math.min(360, Math.max(0, hue));
      this.saturation = Math.min(100, Math.max(0, saturation));
      this.lightness = Math.min(100, Math.max(0, lightness));
  }

  toString() {
      return `HSL(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
  }
}

export type HSLColorObject = InstanceType<typeof HSLColor>;
