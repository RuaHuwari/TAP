function find_the_missing_number(nums) {
    const n = nums.length;
    var missing;
    const expected = (n * (n + 1)) / 2;
    const Sum = nums.reduce((sum, num) => sum + num, 0);
    missing=expected-Sum;
    return missing;
}

