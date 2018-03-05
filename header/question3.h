#ifndef QUESTION_3_H
#define QUESTION_3_H

#define MAX_DIGITS 64

struct bigNumber {

    int digits[MAX_DIGITS];
    int length;
};

static struct bigNumber * toBigNumber(int);
static struct bigNumber * copy(struct bigNumber *);
static void addDigitAtIndex(struct bigNumber *, int, int);
static struct bigNumber * sum(struct bigNumber *, struct bigNumber *);
void printDigits(struct bigNumber *);
struct bigNumber * getFibonacci(int);

#endif