function voltage(current,resistance) {
    const v = current * resistance;
    return v;
}

const result = voltage(14, 300);
console.log("RESULT IS", result, "v");