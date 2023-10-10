import React from 'react'
// import Home from './Home'
// import StarRating from './component/StarRating'
// import StarRatingClick from './component/StarRatingClick'
// import ProgressBar from './component/ProgressBar'
// import Pagination from './component/Pagination'
import Search from './component/Search'

const App = () => {
  return (
    <div className='main-div' >
      {/* this is for ReusableModal modal */}
      {/* <Home/>  */}

      {/* -------------------------------------------------------------------------------------Star Rating by user or click over Star-------- */}
      {/* <StarRating rating={2.5}/> */}
      {/* <StarRatingClick/> */}

      {/* -----------------------Progress--- Bar---------------------------------------------------- */}
      {/* <ProgressBar/> */}
{/* -------------------------------Pagination-----------------------  */}
      {/* <Pagination/> */}
      {/* -------------------------------Search-----------------------  */}
      <Search/>
      
    </div>
  )
}

export default App