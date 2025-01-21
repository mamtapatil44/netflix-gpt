export const checkValidData =(email,password) =>{
   const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
   const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
   let errorMessage;
    if (!isEmailValid) return errorMessage = "Email is invalid"
        
    if (!isPasswordValid) return errorMessage = "Password must be at least 8 characters long"
        
    
 return null;
}