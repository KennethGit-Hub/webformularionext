import '../styles/globals.css'
import App from 'next/app'
import firebase, {FirebaseContext} from '../firebase';

const MyApp = props => {

  const {Component, pageProps}= props;

  return (
  <FirebaseContext.Provider
  value={{
      firebase
    }}
  >
    <Component {...pageProps}/>
    
  </FirebaseContext.Provider>
  )
}
// function MyApp({ Component, pageProps }) {
//   return (
//   <Component {...pageProps} />
//   <FirebaseContext.Provider>

//   </FirebaseContext.Provider>
//   )
// }

export default MyApp
