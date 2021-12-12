export class Offre {
  constructor(
    public days: Number,
    public rooms: Number,
    public adults: Number,
    public children: Number,
    public desc: String,
    public destination: String,
    public hotel: String,
    public price: Number,
    public promo: Number,
    public images: [String],
    public _id?: String
  ) {}
}
