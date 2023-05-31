import {
    CognitoUserPool,
    CognitoUser,
    AuthenticationDetails
} from 'amazon-cognito-identity-js';
import Cookies from 'js-cookie';


var poolData = {
    UserPoolId: 'us-east-1_buAoeM88e',
    ClientId: '5ss88m7dlv5mch7565mjnf7f9v'
};
var userPool = new CognitoUserPool(poolData);


let userAttributes = [];


export function register(name, username, password, email, affiliation, role) {
    let attrList = [
        { Name: "given_name", Value: name.split(" ")[0] },
        { Name: "family_name", Value: name.split(" ")[1] },
        { Name: "email", Value: email },
        { Name: "custom:affiliation", Value: affiliation },
        { Name: "custom:role", Value: role }
    ];
    userPool.signUp(username, password, attrList, null, (err, res) => {
        if (err) {
            alert("Error in registering: " + err.message);
            return;
        }
        alert("Signed up! Check your email for a verification link.");
        let cognitoUser = res.user;
        console.log(cognitoUser);
        return cognitoUser;
    })
}

export function signIn(username, password) {
    let cognitoUser = new CognitoUser({ Username: username, Pool: userPool })
    let authDetails = new AuthenticationDetails({ Username: username, Password: password })
    cognitoUser.authenticateUser(authDetails, {
        onSuccess: (res) => {
            var accessToken = res.getAccessToken().getJwtToken();
            Cookies.set("isSignedIn", true);
            Cookies.set("authToken", accessToken);
            console.log(accessToken);
            cognitoUser.getUserAttributes((err, res) => {
                Cookies.set("userAttributes", JSON.stringify(res))
            });
        },
        onFailure: (err) => {
            alert(err.message);
        }
    })
}

export function getAuthHeaders() {
    return {
        headers: {
            "Authorization": Cookies.get("authToken")
        }
    };
}

export function getUserAttributes() {
    return JSON.parse(Cookies.get("userAttributes"));
}