
import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import "./Style.css"
import AddStudents from "./Components/AddStudents";
import AuthPage from "./Components/AuthPage.js";
import DashBoard from "./Components/DashBoard";
import EditStudents from "./Components/EditStudents";
import NoPage from "./Components/NoPage";
import { StudentDetails } from "./Components/Student";
import StudentProfile from "./Components/StudentProfile";
import WelcomePage from "./Components/WelcomePage";


function App() {
  // data
  const [studentsData, setStudents] = useState([]);
// mounting 
useEffect(()=>{
   const getStudents = async () => {
    try {
      const response = await fetch("https://63ae58f1ceaabafcf177e2a6.mockapi.io/data", {
        method:"GET"
      }); 
      const data = await response.json();
      console.log(data);
      setStudents(data)
    } catch (error) {
      console.log("Error Occured")
    }
   }; 

   getStudents();
   // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (
    <div className="App">
       
   <Switch>
    
     <Route exact path ="/">
     <WelcomePage/>
     </Route>
      
      <Route path="/dashboard">
          <DashBoard/>
      </Route>

      <Route path= "/register">
        <AuthPage/>
      </Route>

      <Route path = "/details">
        <StudentDetails 
        studentsData={studentsData} 
        setStudents= {setStudents}/>
      </Route>

      <Route path = "/students">
         <Redirect to = "/details"/>
      </Route>

      <Route path = "/student/:id">
        <StudentProfile studentsData={studentsData} />
      </Route>

      
      <Route path = "/add-data">
        <AddStudents
        studentsData={studentsData} 
        setStudents= {setStudents}
        />
      </Route>

      <Route path = "/edit/:id">
        <EditStudents 
        studentsData={studentsData}
        setStudents= {setStudents} />
      </Route>

      <Route path = "**">
        <NoPage/>
      </Route>




   </Switch>

    
    
      
    </div>
  );
}

export default App;