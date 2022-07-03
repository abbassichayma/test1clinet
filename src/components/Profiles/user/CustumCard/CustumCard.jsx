
import React, { useEffect } from 'react'
import { useState } from 'react';

import {NavDropdown,Button, Badge} from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteArticle, updateArticle,getheart, getArticle, addDeleteheart } from '../../../redux/Action';
import Publication from '../Publication/Publication';

function CustumCard() {
  const dispatch=useDispatch()
 
  const [show,setShow] = useState(false)
  const Arr =useSelector(state=>state.articles)
  const hearts =useSelector(state=>state.hearts)

  
  const heartHandler = (id,heart) =>{
    dispatch(addDeleteheart(id,{heart:1}))
   
  }
  useEffect(()=>{
    dispatch(getheart()) 
    dispatch(getArticle())
  },[])
  return (
  
    <Row xs={1} md={4} className="g-4"> 
      {Arr?.map((el) => (
       
        <Col>
          <Card >
           <Link to={`/${el._id}`}><Card.Img variant="top" src={el.image} /></Link>
           <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>
                {el.category}<br></br>
                {el.description}
              </Card.Text>
            </Card.Body>
          
            <Card.Footer>
              <span className='opinion'>
              <i className="fas fa-thumbs-up"></i>
              </span>

              <span className={show ? "adorer" :'opinion'}>
              <i className="fas fa-heart" onClick={()=>heartHandler(el._id,el.heart)}></i>
              <Badge bg="secondary">{hearts?.filter(index => index.article == el._id
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

export default CustumCard