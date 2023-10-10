import React, { useEffect, useState } from 'react'

const Pagination = () => {
    const[products,setProducts]= useState([])
    const[page,setPage]= useState(1); 

const getProducts= async()=>{
    // const response = await fetch('https://dummyjson.com/products?limit=100'); for manual handle from frontend only
    console.log(page,"page")
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10-10}`);
    const result= await response.json()
    setProducts(result.products)

}
  
    useEffect(() => { getProducts() },[page])
 

    const handlePrevPage=()=>{
       if(page>1)
            {
           setPage(page - 1)
            }
        
        
    }
    const handleNextPage=()=>{
        if (page < 10) {
        setPage(page + 1)
        }
    }

    const handleNumberClick=(selectedPage)=>{
      
        setPage(selectedPage)
       

    }
 

  return (
      <div> <h3>Pagination</h3>
          {/* products && products?.slice(page*10-10,page*10).map   this logic for when we handle from frontend only */}
          {products && products?.map((product)=>
<div key={product.id}  className='product' >
                  <p> {product.id}. {product.title} </p>
                  <p> price: {product.price} </p>
    </div>

          ) }

<ul className='button-page' >
              {page > 1 ? <li onClick={handlePrevPage} >
                  Prev
              </li>: ""}
              {/* [...Array(products.length / 10)] this logic for when we handle from frontend only */}
              {[...Array(products.length )].map((_, i) => <li className={page === i + 1 ? "text" :"" } onClick={()=> handleNumberClick(i+1) } >{i + 1}</li>)}  
              {/* products.length/10   same as here too */}
              {page < products.length ? <li onClick={handleNextPage} >
                  Next
              </li>:""}
</ul>
    </div>
  )
}

export default Pagination