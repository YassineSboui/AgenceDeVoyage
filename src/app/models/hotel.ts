export class Hotel {
  constructor(
    public name: string,
    public image: string,
    public rating: number,
    public nightprice: number,
    public promotion: number,
    public latitude: number,
    public city: string,
    public enpromo : boolean
  ) {}
}
