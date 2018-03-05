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

    struct bigNumber *number = malloc(sizeof(struct bigNumber));

    if(value == 0) {

        number->length = 1;
        number->digits[0] = 0;

        return number;
    }

    number->length = 0;

    while(value != 0) {

        number->digits[number->length++] = value % 10;
        value = (value - value % 10) / 10;
    }

    return number;
}

static struct bigNumber * copyBigNumber(struct bigNumber * number) {

    struct bigNumber *copy = malloc(sizeof(struct bigNumber));
    copy->length = number->length;

    for(int i = 0; i < copy->length; i++) {

        copy->digits[i] = number->digits[i];
    }

    return copy;
}

static void addDigit(struct bigNumber * number, int digit, int index) {

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

        addDigit(number, sum / 10, index + 1);
    }
}

static struct bigNumber * addBigNumber(struct bigNumber * number1, struct bigNumber * number2) {

    struct bigNumber *sum = copyBigNumber(number1);

    for(int i = 0; i < number2->length; i++) {

        addDigit(sum, number2->digits[i], i);
    }

    return sum;
}

void printBigNumber(struct bigNumber * number) {

    for(int i = number->length - 1; i >= 0; i--) {

        printf("%d", number->digits[i]);
    }
}

struct bigNumber * getFibonacci(int total) {

    struct bigNumber *fibonacci = malloc(sizeof(struct bigNumber) * total);

    for(int i = 0; i < total; i++) {

        if(i < 2) {

            fibonacci[i] = *toBigNumber(i);

            continue;
        }

        fibonacci[i] = *addBigNumber(&fibonacci[i - 1], &fibonacci[i - 2]);
    }

    return fibonacci;
}