#ifndef QUESTION_3_H
#define QUESTION_3_H

#define MAX_DIGITS 64

struct bigNumber {

    int digits[MAX_DIGITS];
    int length;
};

static struct bigNumber * toBigNumber(int);
static struct bigNumber * copyBigNumber(struct bigNumber *);
static void addDigit(struct bigNumber *, int, int);
static struct bigNumber * addBigNumber(struct bigNumber *, struct bigNumber *);
void printBigNumber(struct bigNumber *);
struct bigNumber * getFibonacci(int);

#endif