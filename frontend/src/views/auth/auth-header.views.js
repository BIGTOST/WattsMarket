export default function autHeader(){
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && user.token){
        return {Authorization:'Bearer' + user.token};
    }
    else{
        return{};
    }
}