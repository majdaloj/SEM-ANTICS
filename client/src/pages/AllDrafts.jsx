import { useEffect } from 'react'
import Draft from '../components/Draft'

function AllDrafts() {

  const drafts = [1, 2, 3, 4, 5, 6]

  return (
    <>
        <h1 className='text-center mb-4'>Past Drafts</h1>
        {
          drafts.map((classifications) => {
            return <div className='mb-3 w-75 mx-auto form-control'>Hello</div>
          })
        }
    </>
  )
}

export default AllDrafts