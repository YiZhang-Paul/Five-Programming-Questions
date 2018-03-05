#include <stdio.h>
#include <stdlib.h>
#include "header/question1.h"
#include "header/question2.h"
#include "header/question3.h"
#include "header/question4.h"
#include "header/question5.h"

int main(void) {

    //question 1
    printf("Question No.1:\n\n");

    int numbers[] = { 2, 4, 5, 6, 9 };
    printf("2 + 4 + 5 + 6 + 9 = %d\n", sumWithForLoop(numbers, 5));
    printf("2 + 4 + 5 + 6 + 9 = %d\n", sumWithWhileLoop(numbers, 5));
    printf("2 + 4 + 5 + 6 + 9 = %d\n\n", sumWithRecursion(numbers, 5));

    //question 2
    printf("Question No.2:\n\n");

    int list1[] = { 1, 3, 5 };
    int list2[] = { 2, 4, 6, 7, 8};
    int *combinedList = combine(list1, 3, list2, 5);

    printf("Combined List: ");

    for(int i = 0; i < 8; i++) {

        printf("%d ", combinedList[i]);
    }

    printf("\n\n");

    free(combinedList);

    //question 3
    printf("Question No.3:\n\n");

    struct bigNumber *fibonacci = getFibonacci(100);

    for(int i = 0; i < 100; i++) {

        printf("F(%d) = ", i);
        printDigits(&fibonacci[i]);
        printf("; ");
    }

    printf("\n\n");

    free(fibonacci);

    //question 4
    printf("Question No.4:\n\n");

    int values[] = { 50, 2, 1, 9 };
    printf("[50, 2, 1, 9] -> %d\n\n", findMaxValue(values, 4));

    //question 5
    printf("Question No.5:\n\n");

    char operators[] = "+- ";
    int inputs[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
    findEquations(operators, inputs, 9, 100);

    return 0;
}