#include <stdlib.h>
#include <math.h>
#include "header/question4.h"

#define MAX(a, b) ((a) > (b) ? (a) : (b))

/**
 * Write a function that given a list of non negative integers, arranges
 * them such that they form the largest possible number.
 * For example, given [50, 2, 1, 9], the largest formed number is 95021.
 */

static int countDigits(int number) {

    return floor(log10(number)) + 1;
}

static int padDigits(int number, int total) {

    int length = countDigits(number);

    if(length < total) {

        for(int i = 0; i < total - length; i++) {

            number = number * 10 + number % 10;
        }
    }

    return number;
}

static int joinNumbers(int * numbers, int total) {

    int joined = numbers[total - 1];

    for(int i = total - 2; i >= 0; i--) {

        joined += (int)(pow(10, countDigits(joined)) + 0.5) * numbers[i];
    }

    return joined;
}

static int compare(const void * a, const void * b) {

    int *valueA = (int *)a;
    int *valueB = (int *)b;
    int maxLength = MAX(countDigits(*valueA), countDigits(*valueB));

    return padDigits(*valueB, maxLength) - padDigits(*valueA, maxLength);
}

int findMaxValue(int * numbers, int total) {

    qsort(numbers, total, sizeof(int), compare);

    return joinNumbers(numbers, total);
}