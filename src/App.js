import React from 'react'
// import Home from './Home'
// import StarRating from './component/StarRating'
// import StarRatingClick from './component/StarRatingClick'
import ProgressBar from './component/ProgressBar'

const App = () => {
  return (
    <div className='main-div' >
      {/* this is for ReusableModal modal */}
      {/* <Home/>  */}

      {/* -------------------------------------------------------------------------------------Star Rating by user or click over Star-------- */}
      {/* <StarRating rating={2.5}/> */}
      {/* <StarRatingClick/> */}

      {/* --------------------------------------------------------------------------- */}
      <ProgressBar/>
    </div>
  )
}

export default App