function calculateRectangleArea() {
    // console.log('yes')
    const rectAngleWidthInput = document.getElementById('rectangle-width');
    const rectAngleWidthText = rectAngleWidthInput.value;
    const widthValue = parseFloat(rectAngleWidthText);
    // console.log(widthValue);


    const rectAngleLength = document.getElementById('rectangle-length');
    const rectAngleText = rectAngleLength.value;
    const lengthValue = parseFloat(rectAngleText);
    // console.log(lengthValue);

    const area = widthValue * lengthValue;
    // console.log('Area is: ', area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;




}