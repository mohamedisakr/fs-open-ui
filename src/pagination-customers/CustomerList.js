import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate'
import {getAll, getCustomers} from '../services/customers'
import CustomerCard from './CustomerCard'

const CustomerList = () => {
  const [customers, setCustomers] = useState([])
  const [meta, setMeta] = useState({})
  let limit = 10

  useEffect(() => {
    loadAllCustomers()
  }, [limit])

  const loadAllCustomers = async () => {
    const res = await getAll()
    const {meta, results} = res.data
    setMeta(meta)
    setCustomers(results)
  }

  const displayCustomers = () => {
    return (
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

  const handlePageChange = async ({selected}) => {
    let currentPage = selected + 1
    const res = await getCustomers(currentPage, limit)
    const {meta, results} = res.data
    setMeta(meta)
    setCustomers(results)
  }

  let {pages} = meta

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
        </>
      )}
    </div>
  )
}

export default CustomerList
