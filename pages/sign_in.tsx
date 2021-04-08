import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import {useCallback, useState} from 'react';

const SignUp: NextPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
  })
  const [errors, setErrors] = useState({
    // 这里使用数组是为了方便类型判断
    username: [], password: [], passwordConfirmation: []
  })
  const onSubmit = useCallback((e)=>{
    e.preventDefault()
    axios.post('api/v1/sessions', formData)
    .then(()=>{
      window.alert('登录成功');
    }, (error)=>{
      if(error.response){
        const response: AxiosResponse = error.response;
        if(response.status === 422){
          console.log(errors);
          console.log(response);
          
          setErrors(response.data)
        }
        console.log(error);
      }
      
    })
  }, [formData])
  return (
    <>
      <h1>登录</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            用户名
            <input type="text" value={formData.username}
              onChange={e => setFormData({
                ...formData,
                username: e.target.value
              })}
            />
          </label>
          {errors.username && errors.username.length > 0 ? <div>
            {errors.username.join(',')}
          </div>: null}
        </div>
        <div>
          <label>
            密码
            <input type="password" value={formData.password}
            onChange={e => setFormData({
              ...formData,
              password:e.target.value
            })}/>
          </label>
          {errors.password && errors.password.length > 0 ? <div>
            {errors.password.join(',')}
          </div>: null}
        </div>
        <button type="submit">登录</button>
      </form>
    </>
  )
}

export default SignUp