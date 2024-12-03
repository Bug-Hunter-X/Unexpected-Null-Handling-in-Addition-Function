# JavaScript Bug: Unexpected Null Handling

This repository demonstrates a common JavaScript bug related to null value handling in a simple addition function. The initial code returns `null` if either input is `null`.  This might not always be the expected behavior; a more robust solution might involve treating null as 0 or throwing an error.

## Bug Description

The `foo` function adds two numbers.  However, if either input is `null`, it returns `null` instead of performing the addition or handling null values differently. This can lead to unexpected results in applications where null values might occur.