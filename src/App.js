// import { useState } from "react";

// function MyTheme (){
//   const [theme,setTheme]= useState(0)

//   return(
//     <div>
//       <h3>{theme}</h3>
//       <button onClick={()=> setTheme(theme+1)}>Click</button>
//     </div>
//   );


// }

// function App () {
//   return (
//     <div>
//       <MyTheme />
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";

// function Likes() {
//     const [like, setLike] = useState(0);

//     return (
//         <div>
//             <h2>{like}</h2>
//             <button onClick={() => setLike(like + 1)}>
//                 Likes
//             </button>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <Likes />
//         </div>
//     );
// }

// export default App;




// import { useState } from "react";

// function Counting() {
//     const [count, setCount] = useState(10);

//     return (
//         <div>
//             <h2>{count}</h2>
//             <input 
//                type="number"
//                minLength={10} 
//                onChange={(event)=> {
//                 if (event.target.value.length >= 10) {
//                         setCount(count - 1);
//                 }
//               }
//             }/>
           
//         </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <Counting />
//         </div>
//     );
// }

// export default App;




import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RegistrationForm({ onRegister }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [course, setCourse] = useState("");
    const [duration, setDuration] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        onRegister({
            name,
            course,
            duration
        });
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">
                            Student Registration
                        </h2>

                        <form onSubmit={handleSubmit}>

                            {/* Username */}
                            <div className="mb-3">
                                <label className="form-label">
                                    Username
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label className="form-label">
                                    Set Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Create password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            {/* Course */}
                            <div className="mb-3">
                                <label className="form-label">
                                    Select Course
                                </label>

                                <select
                                    className="form-select"
                                    value={course}
                                    onChange={(e) =>
                                        setCourse(e.target.value)
                                    }
                                    required
                                >
                                    <option value="">
                                        Select a course
                                    </option>

                                    <option value="Artificial Intelligence & Machine Learning">
                                        AI & Machine Learning
                                    </option>

                                    <option value="Cyber Security">
                                        Cyber Security
                                    </option>

                                    <option value="Full Stack Development">
                                        Full Stack Development
                                    </option>

                                    <option value="Data Science">
                                        Data Science
                                    </option>

                                    <option value="Cloud Computing">
                                        Cloud Computing
                                    </option>

                                    <option value="UI/UX Design">
                                        UI/UX Design
                                    </option>

                                </select>
                            </div>

                            {/* Duration */}
                            <div className="mb-3">
                                <label className="form-label">
                                    Course Duration
                                </label>

                                <select
                                    className="form-select"
                                    value={duration}
                                    onChange={(e) =>
                                        setDuration(e.target.value)
                                    }
                                    required
                                >
                                    <option value="">
                                        Select duration
                                    </option>

                                    <option value="1 Month">
                                        1 Month
                                    </option>

                                    <option value="3 Months">
                                        3 Months
                                    </option>

                                    <option value="6 Months">
                                        6 Months
                                    </option>
                                </select>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Register
                            </button>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
}

function WelcomePage({ student }) {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <div className="card shadow p-5 text-center">

                        <h1 className="text-success">
                            Welcome, {student.name}!
                        </h1>

                        <p className="mt-3 fs-5">
                            You have successfully registered
                            for the course.
                        </p>

                        <h4 className="text-primary">
                            {student.course}
                        </h4>

                        <p>
                            Duration: {student.duration}
                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
}

function App() {
    const [student, setStudent] = useState(null);

    function handleRegister(data) {
        setStudent(data);
    }

    return (
        <>
            {student ? (
                <WelcomePage student={student} />
            ) : (
                <RegistrationForm
                    onRegister={handleRegister}
                />
            )}
        </>
    );
}

export default App;