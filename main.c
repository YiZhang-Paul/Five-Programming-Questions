#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "header/question1.h"
#include "header/question2.h"
#include "header/question3.h"
#include "header/question4.h"
#include "header/question5.h"

int main(void) {

    //question 1
    int numbers[] = { 2, 4, 5, 6, 9 };
    printf("%d\n", sumWithFor(numbers, 5));
    printf("%d\n", sumWithWhile(numbers, 5));
    printf("%d\n", sumWithRecursion(numbers, 5));

    //question 2
    int list1[] = { 1, 3, 5 };
    int list2[] = { 2, 4, 6, 7, 8 };
    int *combined = combine(list1, 3, list2, 5);

    for(int i = 0; i < 8; i++) {

        printf("%d ", combined[i]);
    }

    printf("\n");

    free(combined);

    //question 3
    struct bigNumber *fibonacci = getFibonacci(100);

    for(int i = 0; i < 100; i++) {

        printBigNumber(&fibonacci[i]);
        printf(" ");
    }

    printf("\n");

    free(fibonacci);

    //question 4
    int values[] = { 50, 2, 1, 9 };
    printf("%d\n", findMaxValue(values, 4));

    //question 5
    char operators[] = "+- ";
    int inputs[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
    findEquations(operators, inputs, 9);

    return 0;
}