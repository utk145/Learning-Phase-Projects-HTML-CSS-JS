window.onload = () => {
    const btn = (document.getElementById("btn"));
    btn.addEventListener("click", () => {
        const height = document.getElementById("height").value;
        const weight = document.getElementById("weight").value;
        const res = document.getElementById("result");
        if (!height || isNaN(height) || height < 0) {
            res.innerText = "The value entered for height is not valid!";
            return;
        } else if (!weight || isNaN(weight) || weight < 0) {
            res.innerText = "The value entered for weight is not valid!";
            return;
        } else {
            // weight in kilograms divided by height in meters squared.
            const ans = (weight / ((height * height) / 10000)).toFixed(2);
            if (ans < 18.5) {
                res.innerText = "Underweight: " + String(ans);
            } else if (ans >= 18.5 && ans <= 24.9) {
                res.innerText = "Normal: " + String(ans);
            } else if (ans >= 25 && ans <= 29.9) {
                res.innerText = "Overweight: " + String(ans);
            } else if (ans >= 30 && ans <= 34.9) {
                res.innerText = "Obesity (Class 1): " + String(ans);
            } else if (ans >= 35 && ans <= 39.9) {
                res.innerText = "Obesity (Class 2): " + String(ans);
            } else if (ans >= 40) {
                res.innerText = "Extreme Obesity: " + String(ans);
            }

        }
    });
}


