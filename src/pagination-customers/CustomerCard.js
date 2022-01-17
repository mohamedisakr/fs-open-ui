import React from 'react'

const CustomerCard = ({_id, username, name, email}) => {
  return (
    <div key={_id} className="col-sm-6 col-md-4 v my-2">
      <div className="card shadow-sm w-100" style={{minHeight: 225}}>
        <div className="card-body">
          <h5 className="card-title text-center h2">{username} </h5>
          <h6 className="card-subtitle mb-2 text-muted text-center">{name}</h6>
          <p className="card-text">{email}</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard
