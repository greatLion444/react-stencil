export default function PurchableItem({name, image, price}) {
    return (
        <div>
            <img src={image}></img>
            <p>{name}</p>
            <p>{[price]}</p>
        </div>
    )
}