import React , { useState } from "react";



import rigoImage from "../../img/rigo-baby.jpg";


const Home = () => {
	const [inputValue, setInputValue] = useState ("");
	const [tareas, setTareas] = useState ([]); 

	function handleChange(event){
		setInputValue(event.target.value);
	  
	}

	function handleKey(event){
		if (event.key=="Enter"){
			setTareas([...tareas, inputValue]);
			setInputValue("");
		    
		}	
	}

	function handleClick(index){
		tareas.splice(index, 1)
		const auxiliar = [...tareas]
		setTareas(auxiliar)
	}

	return (
		<div className="container">
			<h1>To Do List</h1>
			<ul>
				<li><input type="text" placeholder="Que tengo que hacer" value={inputValue} onChange={handleChange} onKeyDown={handleKey}></input></li>
				{
					tareas.map((tarea, index)=>
						<li>{tarea} <i class="fas fa-window-close float-end" onClick={event=>handleClick(index)}></i> </li>
						)
				}
			</ul>
			<div>4 tareas pendientes</div>
		</div>
	);
};

export default Home;
