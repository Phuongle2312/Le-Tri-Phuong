#include<stdio.h>
int main(){
    int a,b,d,e;
    float c,f;
    printf("Enter six numbers \n");
    scanf("%d %d %f %d %d %f",&a,&b,&c,&d,&e,&f);
    float z = (a*b)+(c/d) -e*f;
    printf("Result %f\n",z);
    return 0;
}