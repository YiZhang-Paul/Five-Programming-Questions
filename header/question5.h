#ifndef QUESTION_5_H
#define QUESTION_5_H

static char * copyText(char *);
static void nextPermute(char *, int, int, char *, char **, int *);
static char ** permute(char *, int, int *);
static int * getOperands(char *, int *, int);
static int isValidEquation(char *, int *, int, int);
static void printEquation(char *, int *, int);
void findEquations(char *, int *, int, int);

#endif