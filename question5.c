#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "header/question5.h"

/**
 * Write a program that outputs all possibilities to put + or - or nothing between
 * the numbers 1, 2, ..., 9 (in this order) such that the result is always 100.
 * For example: 1 + 2 + 34 – 5 + 67 – 8 + 9 = 100.
 */

static char * copyText(char * text) {

    char *copy = malloc(strlen(text) + 1);

    return strcpy(copy, text);
}

static void nextPermute(char * options, int length, int currentLength, char * currentPermute, char ** allPermutes, int * counter) {

    if(currentLength == length) {

        allPermutes[(*counter)++] = copyText(currentPermute);

        return;
    }

    for(int i = 0; i < strlen(options); i++) {

        currentPermute[currentLength] = options[i];
        nextPermute(options, length, currentLength + 1, currentPermute, allPermutes, counter);
    }
}

static char ** permute(char * options, int length, int * counter) {

    const int total = (int)(pow(strlen(options), length) + 0.5);
    char **permutes = malloc(sizeof *permutes * total);
    char *currentPermute = malloc(length + 1);
    currentPermute[length] = '\0';

    nextPermute(options, length, 0, currentPermute, permutes, counter);

    free(currentPermute);

    return permutes;
}

static int * getOperands(char * operators, int * numbers, int total) {

    int *operands = malloc(sizeof *operands * total);

    for(int i = 0, j = 0, operand = *numbers; i <= strlen(operators); i++) {

        if(i >= strlen(operators) || operators[i] != ' ') {

            operands[j++] = operand;
            operand = i >= strlen(operators) ? 0 : numbers[i + 1];

            continue;
        }
        //combine digits to current operand when space operator is encountered
        operand = operand * 10 + numbers[i + 1];
    }

    return operands;
}

static int isValidEquation(char * operators, int * numbers, int total, int targetSum) {

    int *operands = getOperands(operators, numbers, total);
    int sum = *operands;

    for(int i = 0, j = 1; i < strlen(operators); i++) {

        if(operators[i] != ' ') {

            sum += operands[j++] * (operators[i] == '+' ? 1 : -1);
        }
    }

    free(operands);

    return sum == targetSum;
}

static void printEquation(char * operators, int * numbers, int targetSum) {

    for(int i = 0; i < strlen(operators); i++) {

        printf("%d", numbers[i]);

        if(operators[i] != ' ') {

            printf(" %c ", operators[i]);
        }
    }

    printf("%d = %d", numbers[strlen(operators)], targetSum);
}

void findEquations(char * operators, int * numbers, int total, int targetSum) {

    int counter = 0;
    char **permutes = permute(operators, total - 1, &counter);

    for(int i = 0; i < counter; i++) {

        if(isValidEquation(permutes[i], numbers, total, targetSum)) {

            printEquation(permutes[i], numbers, targetSum);
            printf("\n");
        }
    }
}