import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, FunctionUpdateUser } from "../JS/Action";

const Updateuser = () => {
    const [id, idchange] = useState(0);
    const [firstName, firstNamechange] = useState('');
    const [lastName, lastNamechange] = useState('');
    const [age, agechange] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code } = useParams();

    const userobj=useSelector((state)=>state.user.userobj)


    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj = { id, firstName, lastName, age };
        dispatch(FunctionUpdateUser(userobj,id));
        navigate('/user');
    }

    useEffect(() => {
        dispatch(FetchUserObj(code));
    }, [])

    useEffect(() => {
        if(userobj){
            idchange(userobj.id);
            firstNamechange(userobj.firstName); 
            lastNamechange(userobj.lastName);
            agechange(userobj.age);
           
        }
    }, [userobj])

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Update  User</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Id</label>
                                    <input value={id || ''} disabled="disabled" className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>firstName</label>
                                    <input value={firstName || ''} onChange={e => firstNamechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>lastName</label>
                                    <input value={lastName || ''} onChange={e => lastNamechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>age</label>
                                    <input value={age || ''} onChange={e => agechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                    
                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button> |
                        <Link className="btn btn-danger" to={'/user'}>Back</Link>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Updateuser;
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { FetchUserObj, FunctionUpdateUser } from "../JS/Action";

// const Updateuser = () => {
//     const [id, idchange] = useState(0);
//     const [name, namechange] = useState('');
//     const [email, emailchange] = useState('');
//     const [phone, phonechange] = useState('');
//     const [role, rolechange] = useState('staff');
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { code } = useParams();

//     const userobj=useSelector((state)=>state.user.userobj)


//     const handlesubmit = (e) => {
//         e.preventDefault();
//         const userobj = { id, name, email, phone, role };
//         dispatch(FunctionUpdateUser(userobj,id));
//         navigate('/user');
//     }

//     useEffect(() => {
//         dispatch(FetchUserObj(code));
//     }, [])

//     useEffect(() => {
//         if(userobj){
//             idchange(userobj.id);
//             namechange(userobj.name);
//             emailchange(userobj.email);
//             phonechange(userobj.phone);
//             rolechange(userobj.role);
//         }
//     }, [userobj])

//     return (
//         <div>
//             <form onSubmit={handlesubmit}>
//                 <div className="card">
//                     <div className="card-header" style={{ textAlign: 'left' }}>
//                         <h2>Add User</h2>
//                     </div>
//                     <div className="card-body" style={{ textAlign: 'left' }}>
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <div className="form-group">
//                                     <label>Id</label>
//                                     <input value={id || ''} disabled="disabled" className="form-control"></input>
//                                 </div>
//                             </div>
//                             <div className="col-lg-12">
//                                 <div className="form-group">
//                                     <label>Name</label>
//                                     <input value={name || ''} onChange={e => namechange(e.target.value)} className="form-control"></input>
//                                 </div>
//                             </div>
//                             <div className="col-lg-12">
//                                 <div className="form-group">
//                                     <label>Email</label>
//                                     <input value={email || ''} onChange={e => emailchange(e.target.value)} className="form-control"></input>
//                                 </div>
//                             </div>
//                             <div className="col-lg-12">
//                                 <div className="form-group">
//                                     <label>Phone</label>
//                                     <input value={phone || ''} onChange={e => phonechange(e.target.value)} className="form-control"></input>
//                                 </div>
//                             </div>
//                             <div className="col-lg-12">
//                                 <div className="form-group">
//                                     <label>Role</label>
//                                     <select value={role || ''} onChange={e => rolechange(e.target.value)} className="form-control">
//                                         <option value="admin">Admin</option>
//                                         <option value="staff">Staff</option>
//                                     </select>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                     <div className="card-footer" style={{ textAlign: 'left' }}>
//                         <button className="btn btn-primary" type="submit">Submit</button> |
//                         <Link className="btn btn-danger" to={'/user'}>Back</Link>
//                     </div>

//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Updateuser;