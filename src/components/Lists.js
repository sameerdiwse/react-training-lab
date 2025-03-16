import FruitPrice from './Fruit';
function MyTodoList({ tasks })
{

    const Fruits = ['Apple', 'Banana', 'Guava', 'Grapes']
    const FruitP = 
    [
        {name: 'Apple', price: 100},
        {name: 'Banana', price: 100},
        {name: 'Grapes', price: 240},
        {name: 'Guava', price: 300}
    ];
    return(
        FruitP.map((fruit, key)=>(
        <ul key={key}>
            <FruitPrice namse={fruit.name} price ={fruit.price}/>
        </ul>
    )));
}

export default MyTodoList;