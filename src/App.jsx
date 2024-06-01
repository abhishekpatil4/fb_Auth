import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { auth } from './config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Audio } from 'react-loader-spinner';
import { enqueueSnackbar } from 'notistack'



function App() {
  const [adding, setAdding] = useState(false);
  const handleAdduser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setAdding(false);
      enqueueSnackbar("Signup successfull", { variant: 'success', anchorOrigin: { vertical: 'bottom', horizontal: 'center' } });
    } catch (error) {
      console.error(error);
      setAdding(false);
      enqueueSnackbar(`Signup unsuccessfull:: ${error.message}`, { variant: 'error', anchorOrigin: { vertical: 'bottom', horizontal: 'center' } });
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const payload = Object.fromEntries(data);
    setAdding(true);
    handleAdduser(payload.email, payload.password);
  };

  return (
    <>
      <h1>Simple Authentication</h1>
      <form onSubmit={handleSubmit} style={{ minWidth: '40rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', gap: 10 }}>
          <input name="email" required type="email" placeholder='Email' style={{ width: '15rem', height: '2.2rem', paddingLeft: '10px' }} />
          <input name="password" required type="password" placeholder='Password' style={{ width: '15rem', height: '2.2rem', paddingLeft: '10px' }} />
        </div>
        <button disabled={adding?true:false} type='submit' style={{ margin: '2rem', width: '50%', textAlign: 'center', border:adding&&'none' }}>
          {adding ?
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Audio
                height="15"
                width="15"
                radius="9"
                color="white"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            </div> :
            "Sign Up"}
        </button>
      </form>
    </>
  )
}

export default App
