#include <stdio.h>
int summary(int a, int b)
{
    int total;
    total = a + b;
    return total;
}

int main()
{
    // Tính tổng 2 số a +b
    int a, b;
    int sum;
    printf("Enter a = \n");
    scanf("%d", &a);
    printf("Enter b = \n");
    scanf("%d", &b);
    sum = summary(a, b);
    printf("Sum = %d\n", sum);
    sum = summary(3, b);
    printf("Sum = %d\n", sum);


    sum = summary(5, 10);
    printf("Sum = %d\n", sum);

    return 0;
}
#include<stdio.h>
int summary(int a, int b)
{

}
int main(){
    //Tính tổng 2 số a+b
    int a,b;
    printf("Enter a = \n");
    scanf("%d",&a);
    printf("Enter b = \n");
    scanf("%d",&b);
    int sum;
    sum = a+b;
    printf("Sum = %d",sum);
    return 0;
}
