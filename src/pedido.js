export class Pedido {

  constructor({
    id,
    date,
    shop,
    status,
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