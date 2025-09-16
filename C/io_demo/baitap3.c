#include<stdio.h>
int main(){
    const float PI = 3.14;
    float radius;
    printf("Enter radius \n");
    scanf("%f",&radius);

    float perimiter = 2 * PI * radius;
    float area = PI * radius * radius;
    printf("Perimiter = %f\n",perimiter);
    printf("Area = %f \n",area); 
    return 0;
}