import React,{useState} from "react";
import { FaPlus } from 'react-icons/fa';

export default function Demo(){

  const [file, setFile] = useState();
  function handleIChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleOnChange=(event)=>{
      setNtext(event.target.value);
  }

  const handleOnChangeRole=(event)=>{
      setRtext(event.target.value);
  }

  const handleOnChangePho=(event)=>{
      setPtext(event.target.value);
  }

  const handleOnChangeEmail=(event)=>{
      setEtext(event.target.value);
  }

  const handleOnChangeSum=(event)=>{
      setStext(event.target.value);
  }

  const handleOnChangeLink=(event)=>{
      setLtext(event.target.value);
  }

  const handleOnChangeAddr=(event)=>{
      setAtext(event.target.value);
  }

  const[ntext,setNtext]=useState("")
  const[roletext,setRtext]=useState("")
  const[phonetext,setPtext]=useState("")
  const[emailtext,setEtext]=useState("")
  const[sumtext,setStext]=useState("")
  const[linktext,setLtext]=useState("")
  const[addrtext,setAtext]=useState("")

  const[achList,setAchList]=useState([{achieve:""}]);

  const handleAchAdd=()=>{
      setAchList([...achList,{achieve:""}]);
  };

  const handleAchRemove=(index)=>{
      const list=[...achList];
      list.splice(index,1);
      setAchList(list);
  };

  const handleAchChange=(e,index)=>{
      const {name,value}=e.target;
      const list=[...achList];
      list[index][name]=value;
      setAchList(list);
  }

  const [formValues, setFormValues] = useState([{ designation: "", company : "",sdate:"",edate:"",brief:""}])
  const [EformValues, setEFormValues] = useState([{ college: "", sdate : "",edate:"",degree:"",cgpa:""}])
  const [SformValues, setSFormValues] = useState([{ skill: ""}])

  const handleSkillAdd=()=>{
    setSFormValues([...SformValues,{skill:""}]);
};

const handleSkillRemove=(index)=>{
    const list=[...SformValues];
    list.splice(index,1);
    setSFormValues(list);
};

const handleSkillChange=(e,index)=>{
    const {name,value}=e.target;
    const list=[...SformValues];
    list[index][name]=value;
    setSFormValues(list);
}

  let handleChange = (i, e) => {
      let newFormValues = [...formValues];
      newFormValues[i][e.target.name] = e.target.value;
      setFormValues(newFormValues);
    }
  
  let addFormFields = () => {
      setFormValues([...formValues, { name: "", email: "" }])
    }
  
  let removeFormFields = (i) => {
      let newFormValues = [...formValues];
      newFormValues.splice(i, 1);
      setFormValues(newFormValues)
  }
  
  let handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify(formValues));
  }

  let handleEChange = (i, e) => {
      let newEFormValues = [...EformValues];
      newEFormValues[i][e.target.name] = e.target.value;
      setEFormValues(newEFormValues);
    }
  
  let addEFormFields = () => {
      setEFormValues([...EformValues, { college: "", sdate : "",edate:"",degree:"",cgpa:"" }])
    }
  
    let removeEFormFields = (i) => {
      let newEFormValues = [...EformValues];
      newEFormValues.splice(i, 1);
      setEFormValues(newEFormValues)
  }
  
  


    return(
        <>
        <h4 className="text-center my-4">Let's Create the Resume!</h4>

        <div className="mx-3">
          <div className="row">

            <div className="col-5">
            <div className="card  my-4" id="growth">
                    <form className="my-2 mx-2" onSubmit={handleSubmit}>
                    <div className="row">
                            <div className="row">
                                <div className="col">
                                    <h5>Image</h5>
                                </div>
                                <div className="col">
                                  <input  type="file" onChange={handleIChange} />
                                </div>
                          </div>
                            <div className="row">
                                    <div className="col">
                                        <h5>Name</h5>
                                    </div>
                                    <div className="col">
                                        <input value={ntext} name="name" onChange={handleOnChange}/>
                                    </div>
                              </div>
                    </div>

                    <div className="row">
                            <div className="row">
                                <div className="col">
                                    <h5>Role</h5>
                                </div>
                                <div className="col">
                                    <input value={roletext} onChange={handleOnChangeRole}/>
                                </div>
                            </div>
                            
                            <div className="row">
                                    <div className="col">
                                        <h5>Summary</h5>
                                    </div>
                                    <div className="col">
                                        <textarea value={sumtext} onChange={handleOnChangeSum}></textarea>
                                    </div>
                            </div>
                    </div>

                    <div className="row">
                            <div className="row">
                                <div className="col">
                                    <h5>Phone Number</h5>
                                </div>
                                <div className="col">
                                    <input value={phonetext} type="tel"  onChange={handleOnChangePho}/>
                                </div>
                            </div>
                    
                            <div className="row">
                                    <div className="col">
                                        <h5>Email</h5>
                                    </div>
                                    <div className="col">
                                        <input value={emailtext} onChange={handleOnChangeEmail}/>
                                    </div>
                                </div>
                            
                    </div>

                    <div className="row">
                            <div className="row">
                                <div className="col">
                                    <h5>LinkedIn</h5>
                                </div>
                                <div className="col">
                                    <input value={linktext} onChange={handleOnChangeLink}/>
                                </div>
                            </div>
                            <div className="row">
                                    <div className="col">
                                        <h5>Address</h5>
                                    </div>
                                    <div className="col">
                                        <input value={addrtext} onChange={handleOnChangeAddr}/>
                                    </div>
                                </div>
                            
                    </div>

                    <div className="row">
                        
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="col-10">
                                            <h5>Work Experience</h5> 
                                        </div>
                                        <div className="col-2 ">
                                            <button type="button" onClick={() => addFormFields()} className="btn btn-light  "><FaPlus /></button> 
                                        </div>
                                    </div>
                                    
                                    <form >
                                        {formValues.map((element, index) => (
                                            <div  key={index}>
                                                <div className="row">
                                                    <div className="col"><h5>Designation</h5></div>
                                                    <div className="col">
                                                    <input type="text" name="designation" value={element.designation || ""} onChange={e => handleChange(index, e)} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col"><h5>Company Name</h5></div>
                                                    <div className="col">
                                                    <input type="text" name="company" value={element.company || ""} onChange={e => handleChange(index, e)} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col"><h5>Start Date</h5></div>
                                                    <div className="col">
                                                    <input type="date" name="sdate" value={element.sdate || ""} onChange={e => handleChange(index, e)} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col"><h5>End Date</h5></div>
                                                    <div className="col">
                                                    <input type="date" name="edate" value={element.edate || ""} onChange={e => handleChange(index, e)} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col"><h5>Brief Description</h5></div>
                                                    <div className="col">
                                                    <input type="text" name="brief" value={element.brief || ""} onChange={e => handleChange(index, e)} />
                                                    </div>
                                                </div>
                                                {
                                                    index ? 
                                                    <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                                                    : null
                                                }
                                            </div>
                                        ))}
                                    </form>
                                </div>
                            </div>
                        
                        
                            <div className="row">
                                    <div className="col">
                                        <div  className="row">
                                            <div className="col-10">
                                            <h5>Education</h5>
                                            </div>
                                            <div className="col">
                                            <button type="button" onClick={() => addEFormFields()} className="btn btn-light  "><FaPlus /></button>
                                            </div>

                                        </div>                                        
                                        <form >
                                        {EformValues.map((element, index) => (
                                            <div  key={index}>
                                                <div className="row">
                                                    <div className="col"><h5>College/School Name</h5></div>
                                                    <div className="col">
                                                    <input type="text" name="college" value={element.college || ""} onChange={e => handleEChange(index, e)} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col"><h5>Start Date</h5></div>
                                                    <div className="col">
                                                    <input type="date" name="sdate" value={element.sdate || ""} onChange={e => handleEChange(index, e)} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col"><h5>End Date</h5></div>
                                                    <div className="col">
                                                    <input type="date" name="edate" value={element.edate || ""} onChange={e => handleEChange(index, e)} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col"><h5>Degree/Class</h5></div>
                                                    <div className="col">
                                                    <input type="text" name="degree" value={element.degree || ""} onChange={e => handleEChange(index, e)} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col"><h5>Percentage</h5></div>
                                                    <div className="col">
                                                    <input type="text" name="cgpa" value={element.cgpa || ""} onChange={e => handleEChange(index, e)} />
                                                    </div>
                                                </div>
                                                {
                                                    index ? 
                                                    <button type="button"  className="button remove" onClick={() => removeEFormFields(index)}>Remove</button> 
                                                    : null
                                                }
                                            </div>
                                        ))}
                                    </form>
                                    </div>
                                </div>
                            
                    </div>

                    <div className="row">
                            <div className="row">
                                <div className="col">
                                    <h5>Skills</h5>
                                </div>
                                <div className="col">
                                {SformValues.map((singleSkill,index)=>(
                                            <div key={index}>
                                                <div >
                                                    <input name="skill" type="text" id="skill" value={singleSkill.achieve} onChange={(e)=>handleSkillChange(e,index)}/>
                                                    
                                                    {SformValues.length-1===index &&(
                                                        <button type="button" onClick={handleSkillAdd} className="add-btn btn btn-light" style={{width:'15%'}}>
                                                            <FaPlus/>
                                                        </button>
                                                    )}
                                                </div>
                                                <div>
                                                    {SformValues.length>1 && 
                                                        <button type="button" onClick={()=>handleSkillRemove(index)} className="remove-btn">
                                                            <span>Remove</span>
                                                        </button>
                                                    }
                                                                        
                                                </div> 
                                            </div>
                                            
                                        ))}
                                </div>
                            </div>
                            
                            <div className="row">
                                    <div className="col">
                                        <h5>Achivements</h5>
                                    </div>
                                    <div className="col">
                                        {achList.map((singleAch,index)=>(
                                            <div key={index}>
                                                <div >
                                                    <input name="achieve" type="text" id="achieve" value={singleAch.achieve} onChange={(e)=>handleAchChange(e,index)}/>
                                                    
                                                    {achList.length-1===index &&(
                                                        <button type="button" onClick={handleAchAdd} className="add-btn btn btn-light" style={{width:'15%'}}>
                                                            <FaPlus/>
                                                        </button>
                                                    )}
                                                </div>
                                                <div>
                                                    {achList.length>1 && 
                                                        <button type="button" onClick={()=>handleAchRemove(index)} className="remove-btn">
                                                            <span>Remove</span>
                                                        </button>
                                                    }
                                                                        
                                                </div> 
                                            </div>
                                            
                                        ))}
                                    </div>
                                </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-danger mx-2 my-3">Import</button>
                        <button type="submit" className="btn btn-warning my-3">Export</button>
                    </div>
                    

                    

                    </form>
                </div>
            </div>

            <div className="col-7">
            <div className="card my-4">
                <div className="row">
                    <div className="col col-4" style={{backgroundColor:'beige'}}>
                        <div className="text-center my-2 text-center"><img className="border border-secondary" src={file} /> </div>
                        <h5 style={{fontWeight:'bold'}} className="mt-4">Contact me at</h5>
                        <p><span style={{fontWeight:'bold'}}>Phone Number: </span>{phonetext}</p>
                        <p><span style={{fontWeight:'bold'}}>Address: </span>{addrtext}</p>
                        <p><span style={{fontWeight:'bold'}}>Email: </span>{emailtext}</p>
                        <p><span style={{fontWeight:'bold'}}>LinkedIn: </span> {linktext}</p>
                        <div>
                            <h5  className="mt-4" style={{fontWeight:'bold'}}>Skills</h5>
                            {SformValues.map((singleSkill,index)=>(
                                <ul key={index}>
                                    {singleSkill.skill && <li>{singleSkill.skill}</li>}
                                </ul>
                            ))}
                        </div>
                    </div>
                    <div className="col col-8">
                        <div className="text-center mt-3">
                            <h5 >{ntext.length>0?ntext:'Name'}</h5>
                            <p>{roletext.length>0?roletext:'Designation'}</p>
                        </div>
                        <div style={{backgroundColor:'bisque'}}><h5 className="p-1">Professional Summary</h5>
                        </div>
                        <p>{sumtext.length>0?sumtext:'Write a professional summary'}</p>
                        <div>
                              <div style={{backgroundColor:'bisque'}}> <h5 className="p-1">Work Experience</h5> </div>
                            
                            <div>
                            {formValues.map((singleWork,index)=>(
                                <div key={index}>
                                    <h6>{singleWork.designation}</h6>
                                    <p>{singleWork.company} | {singleWork.sdate} to {singleWork.edate}</p>
                                    <p>{singleWork.brief}</p>
                                </div>
                            ))}
                            </div>
                            <div style={{backgroundColor:'bisque'}}><h5 className="p-1">Education Qualifications</h5> </div>
                            
                            <div>
                            <div>
                                
                            {EformValues.map((single,index)=>(
                                <div key={index}>
                                    <h6>{single.college}</h6>
                                    <p>{single.degree} | {single.sdate} to {single.edate}</p>
                                    <p>{single.cgpa}</p>
                                </div>
                            ))}
                            </div>
                            </div>

                        </div>

                        <div>
                            <div style={{backgroundColor:'bisque'}}><h5 className="p-1">Achivements</h5></div>
                            {achList.map((singleAch,index)=>(
                                <ul key={index}>
                                    {singleAch.achieve && <li>{singleAch.achieve}</li>}
                                </ul>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            </div>

          </div>
          </div>
        </>
    )
}