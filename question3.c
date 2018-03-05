#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#include "header/question3.h"

/**
 * Write a function that computes the list of the first 100 Fibonacci numbers.
 * By definition, the first two numbers in the Fibonacci sequence are 0 and 1,
 * and each subsequent number is the sum of the previous two. As an example,
 * here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.
 */

static struct bigNumber * toBigNumber(int value) {

    struct bigNumber *number = malloc(sizeof *number);
    number->length = 0;

    do {
        //value of 0 has a length of 1
        number->digits[number->length++] = value % 10;
        value = (value - value % 10) / 10;

    } while(value != 0);

    return number;
}

static struct bigNumber * copy(struct bigNumber * number) {

    struct bigNumber *copied = malloc(sizeof *copied);
    copied->length = number->length;

    for(int i = 0; i < copied->length; i++) {

        copied->digits[i] = number->digits[i];
    }

    return copied;
}

/**
 * add a digit between 0-9 at given index.
 * e.g. adding 2 at index 1 of 222 means 242, rather than 2222(it does not mean insert)
 */
static void addDigitAtIndex(struct bigNumber * number, int digit, int index) {
    //when adding digit results in new number length
    if(index > number->length - 1) {

        number->digits[index] = digit;

        for(int i = index - 1; i > number->length - 1; i--) {

            number->digits[i] = 0;
        }

        number->length = index + 1;

        return;
    }

    const int sum = number->digits[index] + digit;
    number->digits[index] = sum % 10;

    if(sum > 9) {
        //carry over
        addDigitAtIndex(number, sum / 10, index + 1);
    }
}

static struct bigNumber * sum(struct bigNumber * number1, struct bigNumber * number2) {

    struct bigNumber *result = copy(number1);

    for(int i = 0; i < number2->length; i++) {

        addDigitAtIndex(result, number2->digits[i], i);
    }

    return result;
}

void printDigits(struct bigNumber * number) {

    for(int i = number->length - 1; i >= 0; i--) {

        printf("%d", number->digits[i]);
    }
}

//retrieve first N terms of fibonacci sequence
struct bigNumber * getFibonacci(int total) {

    struct bigNumber *fibonacci = malloc(sizeof *fibonacci * total);

    for(int i = 0; i < total; i++) {

        if(i < 2) {

            fibonacci[i] = *toBigNumber(i);

            continue;
        }

        fibonacci[i] = *sum(&fibonacci[i - 1], &fibonacci[i - 2]);
    }

    return fibonacci;
}