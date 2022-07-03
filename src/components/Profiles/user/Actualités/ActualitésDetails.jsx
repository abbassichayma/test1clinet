import React, { useEffect } from 'react'
import { useState } from 'react';

import {NavDropdown,Button, Badge} from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteArticle, updateArticle,getheart,getArticleDetails, addDeleteheart } from '../../../redux/Action';


function ActualitésDetails() {
  const dispatch=useDispatch()
  const {id} = useParams() 
  const [show,setShow] = useState(false)

  const Details = useSelector(state=>state.details.article)
  const hearts =useSelector(state=>state.hearts)
  const heartHandler = (id,heart) =>{
    dispatch(addDeleteheart(id,{heart:1}))
   
  }
  
  useEffect(()=>{
    dispatch(getheart()) 
    dispatch(getArticleDetails(id))
  },[])
  return (
 
    <Row xs={1} md={1} className="g-4"> 

      { Details && Array.from({ length: 1 }).map((_, idx) => (
       
        <Col>
          <Card >
           <Card.Img variant="top" src={Details.image} />
           <Card.Body>
              <Card.Title>{Details.title}</Card.Title>
              <Card.Text>
               { Details.category}<br></br>
             {Details.description}
              </Card.Text>
            </Card.Body>
          
            <Card.Footer>
              <span className='opinion'>
              <i className="fas fa-thumbs-up"></i>
              </span>

              <span className={show ? "adorer" :'opinion'}>
              <i className="fas fa-heart" onClick={()=>heartHandler(Details._id,Details.heart)}></i>
              <Badge bg="secondary">{hearts?.filter(index => index.article == Details._id
              ).reduce((prev,item) =>  prev+ item.heartNumber,0)}</Badge>
              
              </span>
              




              <NavDropdown title={<i className='fas fa-share-alt' ></i>} id="basic-nav-dropdown">
              <NavDropdown.Item href="https://fr-fr.facebook.com/"><i class="fab fa-facebook"></i> facebook</NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/?lang=fr">
              <i class="fab fa-twitter"></i> twitter
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/"><i class="fab fa-youtube"></i> youtube</NavDropdown.Item>
            </NavDropdown>
              <span className='opinion'>
              <i className="fas fa-thumbs-down"></i>
              </span>
            </Card.Footer>
            <Card.Footer>
            {/* <Button variant="outline-danger" onClick={()=>dispatch(deleteArticle(el._id))}>Supprimer</Button> */}
            <Button variant="outline-danger" >Supprimer</Button>
            <Button variant="outline-success">Modifier</Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
  
}

export default ActualitésDetails

// export default ActualitésDetails