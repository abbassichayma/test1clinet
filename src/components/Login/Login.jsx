
import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser, userLogin } from '../redux/Action'

function Login() {
	const [show, setShow] = React.useState(false)
	const handleClick = () => setShow(!show)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [firstName,setFirstName] = useState('')
	const [lastName,setLastName] = useState('')
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const [emailLogin,setEmailLogin] = useState('')
	const [passwordLogin,setPasswordLogin] = useState('')

	const Registre = (e)=>{
		e.preventDefault()
		dispatch(addUser({firstName,lastName,email,password}))
	}

	const LoginUser = (e)=>{
		e.preventDefault()
		dispatch(userLogin({emailLogin,passwordLogin},navigate))
	}
	
  return (
	<div>
	<a href="https://front.codes/" className="logo" target="_blank">
		
	</a>

	<div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 className="mb-0 pb-3"><span>connexion </span><span>S'inscrire</span></h6>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">connexion</h4>
											<div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Email" id="logemail" autocomplete="off"
													onChange={(e)=>setEmailLogin(e.target.value)}/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="mot de passe" id="logpass" autocomplete="off"
													onChange={(e)=>setPasswordLogin(e.target.value)}/>
												<i className="input-icon uil uil-lock-alt"></i>
												
											</div>
											<a className="btn mt-4" onClick={(e)=>LoginUser(e)}>envoyer</a>
                            				<p className="mb-0 mt-4 text-center"><a href="#0" className="link">mot de passe oublier?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div className="card-back">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">S'inscrire</h4>
											<div className="form-group">
												<input type="text" name="logname" className="form-style" placeholder="Nom" id="logname" autocomplete="off"
												onChange={(e)=>setFirstName(e.target.value)}/>
												<i className="input-icon uil uil-user"></i>
											</div>
											<div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" placeholder="Pr??nom" id="logpass" autocomplete="off"
												onChange={(e)=>setLastName(e.target.value)}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<div className="form-group mt-2">
												<input type="email" name="logemail" className="form-style" placeholder="Email" id="logemail" autocomplete="off"
												onChange={(e)=>setEmail(e.target.value)}/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="mot de passe" id="logpass" autocomplete="off"
												onChange={(e)=>setPassword(e.target.value)}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
										
											<a className="btn mt-4" onClick={(e)=>Registre(e)}>envoyer</a>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
   </div>
  )
}

export default Login