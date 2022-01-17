import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate'
import {getAll} from '../services/customers'

const CustomerList = () => {
  const [customers, setCustomers] = useState([])
  const [meta, setMeta] = useState({})
  const [pageNumber, setPageNumber] = useState(1)

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

  const {total, pages, next, previous} = meta

  const displayCustomers = () => {
    return customers.map(({_id, username, name, email}) => {
      return (
        <div key={_id}>
          <p>{username}</p>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      )
    })
  }

  const handlePageChange = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <div>
      {customers && meta && (
        <>
          {displayCustomers()}
          <ReactPaginate
            pageCount={pages}
            onPageChange={handlePageChange}
            previousLabel={'Previous'}
            nextLabel={'Next'}
            containerClassName={'paginationBttns'}
            previousLinkClassName={'previousBttn'}
            nextLinkClassName={'nextBttn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
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
