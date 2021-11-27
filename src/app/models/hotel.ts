export class Hotel {
  constructor(
    public name: string,
    public description: string,
    public image: string,
    public rating: number,
    public nightprice: number,
    public promotion: number,
    public city: string,
    public enpromo : boolean
  ) {}
}
