import React, {useState} from 'react';
import Form from '../components/Form';
import Body from '../components/Body'
import Datepicker from '../components/Datepicker';
import ColourPicker from '../components/ColourPicker';
import style from '../styles/Home.module.css';

export default function Home() {

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    gender: '',
    birth_date: '',
    occupation: '',
    colour: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    }
  })

  const [title, setTitle] = useState("Enter Details so i can generate you!");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setSelectedDate = (date) => {
    setFormData({...formData, birth_date: parseInt(new Date(date).getFullYear())});
  }

  const setColour = (colour) => {
    setFormData({...formData, colour: colour});
  }

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

  //Destructure state form data.
  const {name, surname, gender, birth_date, occupation, colour} = formData;

  const formInitiation = [
    <input key="1" required type="text" autoComplete='off' placeholder="Name" name="name" value={name} onChange={e => onChange(e)}/>,
    <input key="2" required type="text" autoComplete='off' placeholder="Surname" name="surname" value={surname} onChange={e => onChange(e)}/>,
    <select key="3" required value={occupation} name="occupation" onChange={e => onChange(e)} className={style.occupation}>
      <option>Choose an option</option>
      <option value="chef">Chef</option>
      <option value="developer">Developer</option>
      <option value="social-media">Social Media Influencer</option>
      <option value="yoga">Yoga Instructor</option>
    </select>,
    <div key="4" className={style.picker__container}>
      <div className={style.gender__container}>
      <div className={style.gender__box}><span>Male</span><input type="radio" name="gender" value="Male" onChange={e => onChange(e)}/></div>
      <div className={style.gender__box}><span>Female</span><input type="radio" name="gender" value="Female" onChange={e => onChange(e)}/></div>
      </div>
      <div className={style.colour__picker}>
        <span>Colour</span>
      <ColourPicker colour={colour} setColour={setColour}/>
      </div>
    </div>,
    <Datepicker key="5" setDate={setSelectedDate} date={birth_date}/>
  ]

  const onSubmit = e => {
    e.preventDefault();
    let age = parseInt(new Date().getFullYear()) - birth_date;
    
    setFormData({...formData, birth_date: age});

    if(age < 18 || age === 2021){
      return alert("You are not old enough");
    }

    // convert object to key's array

    const keys = Object.keys(formData);

    // iterate over object

    setIsSubmitted(true);
    setTitle("");

    console.log(formData);

    keys.forEach((key, index) => {
        if(formData[key] === ""){
          setIsSubmitted(false);
          return alert(`${key} should be filled in`);
        }
    });
  }

  return (
    <div className={style.body}>
      <h1> {title} <span className="user__center"></span></h1>
      {!isSubmitted ? <Form inputs={formInitiation} onSubmit={onSubmit}/> : <Body formData={formData}/>}
    </div>
  )
}
