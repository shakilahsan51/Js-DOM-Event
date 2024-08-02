function calculateParallelogramArea() {
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    // console.log(base);


    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);


    const area = base * height;


    const parallelogramAreaSpan = document.getElementById('parallelogram-area');

    parallelogramAreaSpan.innerText = area;
}