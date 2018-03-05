#include <stdlib.h>
#include "header/question2.h"

#define MAX(a, b) ((a) > (b) ? (a) : (b))

/**
 * Write a function that combines two lists by alternatingly taking elements.
 * For example: given the two lists [a, b, c] and [1, 2, 3],
 * the function should return [a, 1, b, 2, c, 3].
 */

int * combine(int * list1, int list1Total, int * list2, int list2Total) {

    int *combined = malloc(sizeof(int) * (list1Total + list2Total));

    for(int i = 0, j = 0; i < MAX(list1Total, list2Total); i++) {

        if(i < list1Total) {

            combined[j++] = list1[i];
        }

        if(i < list2Total) {

            combined[j++] = list2[i];
        }
    }

    return combined;
}