import React, { useEffect, useState } from 'react'

const Search = () => {
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState("true")
    const [error, setError] = useState(null);
    const [item, setItem] = useState([])
    const [name, setName] = useState("")

    const getSearchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await fetch(`https://dummyjson.com/products/search?q=${search}`)
            const response = await result.json();
            setItem(response?.products)
        }
        catch (error) {
            setError(error)

        } finally {
            setLoading(false);
        }

    }
    useEffect(() => { getSearchData() }, [search])
    console.log(name, "---------")
    return (
        <div className='search' >Search
            <div className='input_div' >
                
                {/* <input type='search' placeholder='Search here........' onChange={(e) => {
                    setSearch(e.target.value); setName(e.target.name);
                }} />  this logic when user click a item from list and that item will display on input div only */}
                <input type='search' placeholder='Search here........' onChange={(e) => 
                    setSearch(e.target.value)
                } />

                <div className='dropdown'>
                    {/* {search !== "" ? item?.map((product)}  this logic for search by type */}
                    {item?.filter((elm) => {
                        if (search === "") {
                            return elm
                        }
                        else {
                           return elm.title.toLowerCase().includes(search)
                        }
                    }).map((product) =>
                    (<div key={product?.id} onClick={() => setName(product?.title)} className='products'>
                        <h3>{product.title}</h3>
                        <h3>{product.price}</h3>
                    </div>)
                    ) }
                </div>
            </div>



        </div>
    )
}

export default Search