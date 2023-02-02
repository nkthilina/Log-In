export default function validateInfo(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username = "Username is required"
    }

    //Email
    if(!values.email){
        errors.email = "Email is required"
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email address is invalid"
    }

    //Password
    if(!values.password){
        errors.password = "Password is required"
    }
    else if(values.password.length < 6){
        errors.password = "Password need to have 6 or more characters"
    }

    return errors;
}