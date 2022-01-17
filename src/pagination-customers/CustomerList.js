import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate'
import {getAll} from '../services/customers'
import CustomerCard from './CustomerCard'

const CustomerList = () => {
  const [customers, setCustomers] = useState([])
  const [meta, setMeta] = useState({})

  useEffect(() => {
    loadAllCustomers()
  }, [])

  const loadAllCustomers = async () => {
    const res = await getAll()
    // console.log(`response : ${JSON.stringify(res, null, 4)}`)

    const {meta, results} = res.data
    setMeta(meta)
    setCustomers(results)
  }

  const displayCustomers = () => {
    return (
      // <div className="col-sm-6 col-md-4 v my-2">
      <div className="row m-2">
        {customers.map(({_id, username, name, email}) => {
          return (
            <div key={_id}>
              <CustomerCard
                _id={_id}
                username={username}
                name={name}
                email={email}
              />
            </div>
          )
        })}
      </div>
    )
  }

  let {total, pages, current, next, previous} = meta
  const [pageNumber, setPageNumber] = useState(current)

  const handlePageChange = ({selected}) => {
    console.log(`meta ${JSON.stringify(meta, null, 4)}`)
    console.log(`selected page : ${selected}`)
    // setPageNumber(selected)
    current = selected
  }

  return (
    <div className="container">
      {customers && meta && (
        <>
          {displayCustomers()}
          <ReactPaginate
            pageCount={pages}
            onPageChange={handlePageChange}
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
          />
          {/* <ReactPaginate
            pageCount={pages}
            onPageChange={handlePageChange}
            previousLabel={'Previous'}
            nextLabel={'Next'}
            containerClassName={'paginationBttns'}
            previousLinkClassName={'previousBttn'}
            nextLinkClassName={'nextBttn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          /> */}
        </>
      )}
    </div>
  )
}

export default CustomerList

/* 
<pre>{JSON.stringify(meta, null, 4)}</pre>
<pre>{JSON.stringify(customers, null, 4)}</pre> 
*/
