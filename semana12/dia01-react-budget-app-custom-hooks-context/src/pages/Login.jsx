import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal= withReactContent(Swal)

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate()



    const handleChange = (event) =>{
        const value = event.target.value
        const name = event.target.name
    


        setForm({
            ...form,
        [name]: value
        })

    }


    const handleSubmit = async (event) =>{
        event.preventDefault();

        const email = form.email
        const password = form.password


        const url = `https://64dd6d78825d19d9bfb1282e.mockapi.io/api/v1/users?email=${email}&password=${password}`

        /*const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        } */

        const response = await fetch(url)

        const data = await response.json()

        console.log(data)


        setForm({email: "", password: "",})


        if (data.length === 1){
            const cloneData = {...data[0]}

            delete cloneData.password
            
            localStorage.setItem('auth', JSON.stringify(cloneData))

            navigate("/")

        } else{
            MySwal.fire({
                icon: "error",
                title: "Credenciales incorrectas!"

            })   
        }
    }



  return (
    <form className="w-96 mx-auto" onSubmit={handleSubmit}>
        <h1 className="text-center text-3xl mb-8">Budget App - Login</h1>

        {JSON.stringify(form)}

        <div className="flex flex-col gap-4 bg-slate-200 p-8 rounded-lg shadow-lg">
            <label className="font-medium">
                Email
                <input 
                type="text" 
                name="email"
                placeholder="jhon@mail.com"  
                className="border w-full p-3"
                onChange={handleChange}
                value={form?.email}
                
                />
            </label>
            <label className="font-medium">
                Password
                <input 
                type="password" 
                name="password"
                placeholder="jhon@mail.com" 
                className="border w-full p-3" 
                onChange={handleChange}
                value={form?.password}
                />
            </label>
            <input 
            type="submit" 
            value="Login"
            className="w-full bg-amber-300 p-3 font-medium"/>
        </div>
    </form>
  )
}

export default Login