import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    const customers = await fetchCustomers();

    return (
    <div>
        <p>Customer page</p>
        <ul>
            {customers.map( (item , index)=> <li key={item.id}>{item.name}</li>)}
        </ul>
        
    </div>)
}