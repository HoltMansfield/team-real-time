https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/

{
  "rules": {
    "users": {
      "$user_id": {
        ".write": "$user_id === auth.uid"
      }
    }
  }
}

https://stackoverflow.com/questions/30910704/how-do-i-link-each-user-to-their-data-in-firebase
