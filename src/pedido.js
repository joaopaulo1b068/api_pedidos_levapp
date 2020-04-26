export class Pedido {

  constructor({
    id,
    date,
    shopID,
    shopLabel,
    status,
    clientID,
    clientLabel,
    clientAddress
  }) {
    this.id = id
    this.date = date
    this.shopLabel = shopLabel
    this.shopID = shopID
    this.status = status
    this.clientLabel = clientLabel
    this.clientID = clientID
    this.clientAddress = clientAddress
  }

}