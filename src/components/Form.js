import React from 'react'
import { useFormik } from 'formik';
import validationSchema from './Validation';
import './Form.css'

function form() {
    // 

    const { handleSubmit,handleChange, handleBlur, errors, touched} = useFormik({
        initialValues: {
          name :'',
          surname:'',
          email: '',
          phone:'',
          password:'',
          passwordConfirm:'',
          gender:'',
        },
        onSubmit: (values) => {
          console.log(values)
        },
        validationSchema,
      });

  return (
    <div className="container">
    <div className="title">Rıdvan Üçdağ - Kayıt Ol</div>
    <div className="content">
    <form onSubmit={handleSubmit}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Adınız</span>
            <input type="text" name='name' placeholder="Adınız" onChange={handleChange} onBlur={handleBlur} />
            <br/>
            {errors.name && touched.name && <div className='error'>{errors.name}</div>}
          </div>
          <div className="input-box">
            <span className="details">Soyadınız</span>
            <input type="text" name='surname' placeholder="Soyadınız" onChange={handleChange} onBlur={handleBlur} />
            <br/>
            {errors.surname && touched.surname && <div className='error'>{errors.surname}</div>}
          </div>
          <div className="input-box">
            <span className="details">E-Mail</span>
            <input type="text" name='email' placeholder="E-Mail" onChange={handleChange} onBlur={handleBlur} />
            <br/>
            {errors.email && touched.email && <div className='error'>{errors.email}</div>}
          </div>
          <div className="input-box">
            <span className="details">Telefon Numarası</span>
            <input type="number" name='phone' placeholder="Telefon Numarası" onChange={handleChange} onBlur={handleBlur} />
            <br/>
            {errors.phone && touched.phone && <div className='error'>{errors.phone}</div>}
          </div>
          <div className="input-box">
            <span className="details">Parola</span>
            <input type="password" name='password' placeholder="Parola Tekrar" onChange={handleChange} onBlur={handleBlur} />
            <br/>
            {errors.password && touched.password && <div className='error'>{errors.password}</div>}
          </div>
          <div className="input-box">
            <span className="details">Parola Tekrar</span>
            <input type="password" name='passwordConfirm' placeholder="Parola Tekrar" onChange={handleChange} onBlur={handleBlur} />
            <br/>
            {errors.passwordConfirm && touched.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div>}
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" value="erkek" onChange={handleChange} onBlur={handleBlur} id="dot-1"/>
          <input type="radio" name="gender" value="kadın" onChange={handleChange} onBlur={handleBlur} id="dot-2"/>
          <input type="radio" name="gender" value="Belirtmek istemiyorum" onChange={handleChange} onBlur={handleBlur} id="dot-3"/>
          
          <span className="gender-title">Cinsiyet</span>
          <div className="category">
            <label htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender">Erkek</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender">Kadın</span>
          </label>
          <label htmlFor="dot-3">
            <span className="dot three"></span>
            <span className="gender">Belirtmek İstemiyorum</span>
            </label>
            
           
          </div>
          {errors.gender && touched.gender && <div className='error'>{errors.gender}</div>}
        </div>
        <div className="button">
          <input type="submit" value="Kayıt Ol"/>
        </div>
      </form>
    </div>
  </div>
  )
}

export default form