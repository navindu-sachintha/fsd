const d = new Date()
const hour = d.getHours();
let greet = null

switch(hour){
    case hour > 0 && hour < 12:
        greet = "Good Morning!..."
        break
    case hour > 12 && hour < 18:
        greet = "Good afternoon!..."
        break
    case hour > 18 && hour < 23:
        greet = "Good Night!...."
        break
    default:
        greet = "Hi"
}

window.prompt(greet);