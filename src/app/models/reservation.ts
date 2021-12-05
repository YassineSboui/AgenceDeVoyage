export class Reservation {
    constructor( 
    public city:  String, 
    public checkin: Date,
    public days: Number,
    public rooms: Number,
    public adults: Number,
    public children: Number,
    public email: String,
    public phone: Number,
    public destination: String,
    public hotel: String,
    public price: Number,
    public status: String,
    public _id?: String
    ) {}
}
