import React from 'react'
import './footer.css'
import { Card } from 'react-bootstrap'

function Footer() {
  return (
    <div className='footer'>
        <Card style={{ width: '100%' }}>
      <Card.Body>
        
        <Card.Text className='copyRight'>
          All copyrights are reserved
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Footer