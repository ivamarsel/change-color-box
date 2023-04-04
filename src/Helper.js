function choice(arr) {
    let randomColor = Math.floor(Math.random() * arr.length);
    return arr[randomColor];
} //it returns a [random] element from the arr




const rgbValue = () => {
    return (Math.floor(Math.random() * 256));

}//makes a random value out of 255, so we 
//can use it to generate a rgb number for each red, green and black 

function rgbColorPicker(num) {
    let colors = []

    for (let i = 0; i < num; i++) {
        const red = rgbValue();
        const green = rgbValue();
        const black = rgbValue();
        colors.push(`rgb(${red}, ${green}, ${black})`);
    }
    return colors;
}//makes an array of (certain number) of colors.

export { choice, rgbValue, rgbColorPicker };
