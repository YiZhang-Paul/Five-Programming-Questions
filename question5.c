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

static char * copy(char * text) {

    char *copied = malloc(strlen(text) + 1);

    return strcpy(copied, text);
}

static void startPermute(char * options, int total, int counter, char * current, char ** permutes, int * permuteCount) {

    if(counter == total) {

        permutes[(*permuteCount)++] = copy(current);

        return;
    }

    for(int i = 0; i < strlen(options); i++) {

        current[counter] = options[i];
        startPermute(options, total, counter + 1, current, permutes, permuteCount);
    }
}

static char ** permute(char * options, int total, int * permuteCount) {

    const int totalPermute = (int)(pow(strlen(options), total) + 0.5);
    char **permutes = malloc(sizeof *permutes * totalPermute);
    char *current = malloc(total + 1);
    current[total] = '\0';

    startPermute(options, total, 0, current, permutes, permuteCount);

    free(current);

    return permutes;
}

static int isValidEquation(char * operators, int * numbers, int total, int target) {

    return 1;
}

static void printEquation(char * operators, int * numbers, int target) {

    for(int i = 0; i < strlen(operators); i++) {

        printf("%d", numbers[i]);

        if(operators[i] != ' ') {

            printf(" %c ", operators[i]);
        }
    }

    printf("%d = %d", numbers[strlen(operators)], target);
}

void findEquations(char * operators, int * numbers, int total, int target) {

    int permuteCount = 0;
    char **permutes = permute(operators, total - 1, &permuteCount);

    for(int i = 0; i < permuteCount; i++) {

        if(isValidEquation(permutes[i], numbers, total, target)) {

            printEquation(permutes[i], numbers, target);
            printf("\n");
        }
    }
}