#include "header/question1.h"

/**
 * Write three functions that compute the sum of the numbers in
 * a given list using a for-loop, a while-loop, and recursion.
 */

int sumWithForLoop(int * numbers, int total) {

    int sum = 0;

    for(int i = 0; i < total; i++) {

        sum += numbers[i];
    }

    return sum;
}

int sumWithWhileLoop(int * numbers, int total) {

    int sum = 0;

    while(total) {

        sum += *numbers++;
        total--;
    }

    return sum;
}

int sumWithRecursion(int * numbers, int total) {

    if(total == 1) {

        return *numbers;
    }

    return *numbers + sumWithRecursion(numbers + 1, total - 1);
}