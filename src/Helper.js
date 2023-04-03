function choice(arr) {
    let randomColor = Math.floor(Math.random() * arr.length);
    return arr[randomColor];
}



const rgbValue = () => {
    return (Math.floor(Math.random() * 256));


}

function rgbColorPicker(num) {
    let colors = []

    for (let i = 0; i < num; i++) {
        const red = rgbValue();
        const green = rgbValue();
        const black = rgbValue();
        colors.push(`rgb(${red}, ${green}, ${black})`);
    }
    return colors;
}

export { choice, rgbValue, rgbColorPicker };
