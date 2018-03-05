#include <stdlib.h>
#include "header/question2.h"

#define MAX(a, b) ((a) > (b) ? (a) : (b))

/**
 * Write a function that combines two lists by alternatingly taking elements.
 * For example: given the two lists [a, b, c] and [1, 2, 3],
 * the function should return [a, 1, b, 2, c, 3].
 */

int * combine(int * list1, int list1Length, int * list2, int list2Length) {

    int *combined = malloc(sizeof *combined * (list1Length + list2Length));
    //ensure all elements in both arrays are included
    for(int i = 0, j = 0; i < MAX(list1Length, list2Length); i++) {

        if(i < list1Length) {

            combined[j++] = list1[i];
        }

        if(i < list2Length) {

            combined[j++] = list2[i];
        }
    }

    return combined;
}