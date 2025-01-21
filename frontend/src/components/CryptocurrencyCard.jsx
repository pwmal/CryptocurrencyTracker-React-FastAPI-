import {Card} from "antd";

function CryptocurrencyCard(props) {

    const { currency } = props

    const price = Math.round(currency.quote.USD.price)

    return (
    <>
        <Card
        title={
            <div className="flex items-center gap-3">
                <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} />
                <span>
                    {currency.name}
                </span>
            </div>
        }
        style={{
            width: 900,
        }}
        >
        <p>Текущая цена: {price}$</p>
        <p>Изменение цены за 24 часа: </p>
        <p>Текущая капитализация: </p>
        </Card>
    </>
    )
  }

  export default CryptocurrencyCard
