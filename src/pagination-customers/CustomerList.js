import React, {useEffect, useState} from 'react'
import {getAll} from '../services/customers'

const CustomerList = () => {
  const [customers, setCustomers] = useState([])
  const [meta, setMeta] = useState({})

  useEffect(() => {
    loadAllCustomers()
  }, [])

  const loadAllCustomers = async () => {
    const res = await getAll()
    console.log(`response : ${JSON.stringify(res, null, 4)}`)
    // setCustomers(res)
    const {meta, results} = res.data
    setMeta(meta)
    setCustomers(results)
  }

  return (
    <div>
      {customers && meta && (
        <>
          <pre>{JSON.stringify(meta, null, 4)}</pre>
          <pre>{JSON.stringify(customers, null, 4)}</pre>
        </>
      )}
    </div>
  )
}

export default CustomerList

/*
  customers &&
        customers.data &&
        customers.data.meta &&
        customers.data.results
        && (
        <>
          <pre>{JSON.stringify(customers.data.meta, null, 4)}</pre>
          <pre>{JSON.stringify(customers.data.results, null, 4)}</pre>
        </>
      )
  */
