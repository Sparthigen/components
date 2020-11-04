

import Adress from './component/profile/Adress';
const { default: FullName } = require("./component/profile/FullName");
const { default: ProfilPhoto} = require("./component/profile/ProfilPhoto");

//import ProfilPhoto from './component/profile/ProfilPhoto';
//import FullName from './component/profile/FullName';





function App() {
    return (
        <>
           
            <ProfilPhoto />
            <FullName />
            <Adress />
        
        </>




    )

}

export default App;