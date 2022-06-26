const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

/*
    Please find the below mentioned test cases details.
    I have worked in Java. So, I have mentioned the pseudo code for test case
*/

/*
    Test case 1 : event is null
    Test case 2 : event is empty
    Test case 3 : event with partitionKey length < 256
    Test case 4 : event with partitionKey length = 256
    Test case 5 : event with partitionKey length < 0
    Test case 6 : event with partitionKey length > 256
    Test case 7 : event with partitionKey length > 256
    Test case 8 : event with no partitionKey and type is string
    Test case 9 : event with no partitionKey and type is not string

*/