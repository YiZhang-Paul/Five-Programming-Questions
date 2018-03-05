#include <stdlib.h>
#include <math.h>
#include "header/question4.h"

#define MAX(a, b) ((a) > (b) ? (a) : (b))

/**
 * Write a function that given a list of non negative integers, arranges
 * them such that they form the largest possible number.
 * For example, given [50, 2, 1, 9], the largest formed number is 95021.
 */

static int getLength(int number) {

    return floor(log10(number)) + 1;
}

//pad number with its rightmost digit to given length
static int padWithLastDigit(int number, int total) {

    int length = getLength(number);

    while(length < total) {

        number = number * 10 + number % 10;
        length++;
    }

    return number;
}

//concat numbers in an array to form a new number
static int join(int * numbers, int total) {

    int joined = numbers[total - 1];

    for(int i = total - 2; i >= 0; i--) {

        joined += (int)(pow(10, getLength(joined)) + 0.5) * numbers[i];
    }

    return joined;
}

static int compare(const void * a, const void * b) {

    int *valueA = (int *)a;
    int *valueB = (int *)b;
    const int length = MAX(getLength(*valueA), getLength(*valueB));

    return padWithLastDigit(*valueB, length) - padWithLastDigit(*valueA, length);
}

int findMaxValue(int * numbers, int total) {
    //ensure each digit on left is as large as possible
    qsort(numbers, total, sizeof(int), compare);

    return join(numbers, total);
}