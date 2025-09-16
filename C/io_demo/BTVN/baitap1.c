#include <stdio.h>
int main()
{
    // const float PI = 3.14;
    // float radius;
    // printf("Enter the radius\n");
    // scanf("%f",&radius);
    // float perimeter = 2 * PI * radius;
    // float area = PI * radius * radius;
    // printf("Perimeter = %f\n",perimeter);
    // printf("Area = %f\n", area);
    // char a;
    // printf("Insert the letter\n");
    // scanf("Result: %c",a);
    // return 0;

    // int age;
    // printf("Enter the age\n");
    // scanf("%d", &age);
    // if (age > 0 && age < 100)
    // {
    //     if (age >= 15)
    //     {
    //         printf("Du tuoi vao lop 10");
    //     }
    //     else
    //     {
    //         printf("Chua du tuoi vao lop 10");
    //     }
    // }
    // else
    // {
    //     printf("Tuoi khong hop le");
    // }
    // return 0;

    // int x = 0;
    // printf("Enter the number\n");
    // scanf("%d",&x);
    // if (x%2 ==0)
    // {
    //     printf("Even number");
    // }
    // else{
    //     printf("Odd number");
    // }

    // int x;
    // printf("Enter the number:\n");
    // scanf("%d",&x);
    // if (x > 0)
    // {
    //     printf("%d Positve number \n",  x);
    // }
    // else if (x < 0)
    // {
    //     printf("%d Negative number \n", x);
    // }
    // else{
    //     printf("Number 0\n");
    // }
    // return 0;

    // int a;
    // printf("Enter the number\n");
    // scanf("%d",&a);
    // if (a%5==0)
    // {
    //     printf("%d chia het cho 5\n",a);
    // }
    // else{
    //     printf("%d khong chia het cho 5\n",a);
    // }
    // return 0;

    // int a,b;
    // printf("Nhap so nguyen a:\n");
    // scanf("%d",&a);
    // printf("Nhap so nguyen b:\n");
    // scanf("%d",&b);
    // if (a>b)
    // {
    //     printf("So lon hon la: %d\n",a);
    // }
    // else if (a<b)
    // {
    //     printf("So lon hon la: %d\n",b);
    // }
    // else{
    //     printf("Hai so bang nhau\n");
    // }

    int score;
    printf("Enter score: \n");
    scanf("%d", &score);
    if (score >= 0 && score <= 10)
    {
        if (score >= 8)
        {
            printf("Gioi\n");
        }
        else if (score >= 6.5 && score <= 7.9)
        {
            printf("Kha\n");
        }
        else if (score >= 5 && score <= 6.4)
        {
            printf("Trung binh\n");
        }
        else
        {
            printf("Yeu\n");
        }
    }
    else
    {
        printf("Invalid score.\n");
    }
    return 0;
}