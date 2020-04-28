export class Pedido {

  constructor({
    id,
    date,
    // shopID,
    // shopLabel,
    shop,
    status,
    // clientID,
    // clientLabel,
    // clientAddress,
    // clientDist,
    client,
    produtos
  }) {
    this.id = id
    this.date = date
    this.shop = shop
    this.status = status
    this.client = client
    this.produtos = produtos
  }

}