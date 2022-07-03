import React, { useState } from "react";
import {useDispatch} from "react-redux"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  InputGroup,
  InputLeftAddon,
  Input,
  Select
} from "@chakra-ui/react";
import { newPublication } from "../../../redux/Action";
import { Link } from "react-router-dom";


function AddPublication() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };
  const sizes = ["full"];

  const [title,setTitle] = useState('')
  const [image,setImage] = useState('')
  const [domain,setDomain] = useState('')
  const [description,setDescription] = useState('')
  const [details,setDetails] = useState('')
  const dispatch=useDispatch()

const submitPublication =(e)=>{
  e.preventDefault()
  dispatch(newPublication({title,image,domain,description,details}))
}


  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleSizeClick(size)}
          key={size}
          m={4}
        >{`cliquer pour ajouter votre article`}</Button>
      ))}

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Entrer les données</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

          <InputGroup>
           <InputLeftAddon children='Titre' />
          <Input type='text' placeholder='titre' 
          onChange={(e)=>setTitle(e.target.value)}/>
          </InputGroup>
           <br/>
          <InputGroup>
           <InputLeftAddon children='Image' />
          <Input type='text' placeholder='Image' 
           onChange={(e)=>setImage(e.target.value)}/>
          </InputGroup>
          <br/>
          <InputGroup>
          <InputLeftAddon children='Domaine' />
          <Select placeholder='Domaine'  onChange={(e)=>setDomain(e.target.value)}>
        <option value='Actualités'>Actualités</option>
        <option value='Politique'>Politique</option>
        <option value='Economie'>Economie</option>
        <option value='Culture'>Culture</option>
        <option value='Sport'>Sport</option>
        <option value='Art'>Art</option>
       </Select>
           
         
          </InputGroup>
          <br/>
          <InputGroup>
           <InputLeftAddon children='Description'  className="description"/>
          <Input type='text' placeholder='Description'
           onChange={(e)=>setDescription(e.target.value)} />
          </InputGroup>
          <br/>
          <InputGroup>
           <InputLeftAddon children='Détaille' />
          <Input type='text' placeholder='Détaille'
           onChange={(e)=>setDetails(e.target.value)} />
          </InputGroup>



          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>fermer</Button>
            <div></div>
           <Link to= {"/"}><Button  onClick={(e)=>submitPublication(e)} >envoyer</Button></Link> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddPublication;
